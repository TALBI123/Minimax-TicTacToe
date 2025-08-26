import { useEffect, useRef } from "react";
export default function CanvasText({ str }) {
  const canvas = useRef(null);
  useEffect(() => {
    if (!canvas.current) return;
    const text = str;
    const ctx = canvas.current.getContext("2d");
    const width = (canvas.current.width = (window.innerWidth * 2) / 3);
    const height = canvas.current.height;
    class Particle {
      constructor(effect, x, y, color) {
        this.effect = effect;
        this.x = this.effect.width / 2;
        this.y = this.effect.height / 2;
        this.color = color;
        this.baseX = x;
        this.baseY = y;
        this.ctx = this.effect.ctx;
        this.radius = this.effect.cellSize / 2;
        this.random = Math.random() * 40 + 17;
        this.isArrived = false;
      }
      draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
      }
      update() {
        this.draw();
        this.speedX = (this.baseX - this.x) / this.random;
        this.speedY = (this.baseY - this.y) / this.random;
        this.x += this.speedX;
        this.y += this.speedY;
        this.isArrived =
          Math.abs(this.x - this.baseX) < 0.1 &&
          Math.abs(this.y - this.baseY) < 0.1;
      }
    }
    class TransformTextToParticles {
      constructor(ctx, text, width, height) {
        this.ctx = ctx;
        this.text = text;
        this.width = width;
        this.height = height;
        this.cellSize = 3;
        this.fontSize = Math.max(110, this.width / 8);
        this.isAnimmationActive = true;
        this.drawText();
        this.Particles = [];
        this.importData();
      }
      drawText() {
        const gradient = this.ctx.createRadialGradient(
          0,
          0,
          this.width,
          this.height,
          0,
          this.height
        );
        this.ctx.font = `${this.fontSize}px "Bangers", sans-serif`;
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        gradient.addColorStop(0.1, "#5adaff");
        gradient.addColorStop(0.9, "#5468ff");
        gradient.addColorStop(1, "rgba(95, 70, 150, 1)");
        this.ctx.fillStyle = gradient;
        this.ctx.fillText(this.text, this.width / 2, this.height / 2);
      }
      init = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.drawText();
        this.Particles = [];
      };
      importData = () => {
        const data = this.ctx.getImageData(0, 0, this.width, this.height).data;
        for (let y = 0; y < this.height; y += this.cellSize) {
          for (let x = 0; x < this.width; x += this.cellSize) {
            const index = (y * this.width + x) * 4;
            if (data[index + 3] > 0) {
              const red = data[index];
              const green = data[index + 1];
              const blue = data[index + 2];
              const color = `rgb(${red},${green},${blue})`;
              this.Particles.push(new Particle(this, x, y, color));
            }
          }
        }
      };
      animate = () => {
        if (!this.isAnimmationActive) return;
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.Particles.forEach((particle) => particle.update());
        if (this.Particles.every(
          (particle) => particle.isArrived
        )) {
          console.log("is Arrived");
          this.isAnimmationActive = false;
          return;
        }
        requestAnimationFrame(this.animate);
      };
    }
    const transformTextToParticles = new TransformTextToParticles(
      ctx,
      text,
      width,
      height
    );
    console.log(transformTextToParticles);
    transformTextToParticles.animate();
  }, [str]);
  return (
    <canvas
      className="absolute top-0 left-[50%] translate-x-[-50%] "
      ref={canvas}
    ></canvas>
  );
}
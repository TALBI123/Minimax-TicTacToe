import { memo, useRef, useEffect } from "react";
import "./canvas.css";
const CanvasBg = memo(() => {
  const canvas = useRef(null);
  useEffect(() => {
    if (!canvas) return;
    const ctx = canvas.current.getContext("2d");
    const width = (canvas.current.width = window.innerWidth);
    const height = (canvas.current.height = window.innerHeight);
    const resizeCanvas = () => {
      canvas.current.width = window.innerWidth;
      canvas.current.height = window.innerHeight;
    };
    class Particle {
      constructor(effect) {
        this.size = Math.random() * 17 + 5;
        this.ctx = effect.ctx;
        this.widthCanvas = effect.width;
        this.heightCanvas = effect.height;
        this.x = Math.random() * (width - this.size) + this.size * 2;
        this.y = -this.size;
        this.color = Math.floor(Math.random() * 2) ? "#5adaff" : "#5adaff";
        this.speedX = Math.random() - 0.9;
        this.speedY = Math.random() * 1.5 + 0.6;
        this.gravity = Math.random() * 0.00001;
        this.alpha = Math.random();
        this.symbolProperty = Math.floor(this.alpha * 2)
          ? { symbol: "X", color: "#5468ff" }
          : { symbol: "O", color: "tomato" };
        this.fontSizeSymbol = this.size;
      }
      draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.globalAlpha = this.alpha * 0.5;
        this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.globalAlpha = 1;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = "middle";
        this.ctx.font = `${this.fontSizeSymbol}px "Righteous", sans-serif`;
        this.ctx.fillStyle = this.symbolProperty.color;
        this.ctx.fillText(this.symbolProperty.symbol,this.x,this.y)
      }
      update() {
        if (this.y >= effect.height + this.size) {
          this.speedY = Math.random() * 1.5 + 0.6;
          this.y = -this.size;

          this.speedX = Math.random() - 0.5;
        }
        if (this.x < this.size || this.x > effect.width - this.size)
          this.speedX *= -1;
        if (this.y > 2 * this.size) this.speedY += this.gravity;
        this.y += this.speedY;
        this.x += this.speedX;
        this.draw();
      }
    }
    class Effect {
      constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.numOfParticles = 130;
        this.Particles = Array.from(
          { length: this.numOfParticles },
          () => new Particle(this)
        );
      }
      animate = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.Particles.forEach((particle) => particle.update());
        requestAnimationFrame(this.animate);
      };
    }
    const effect = new Effect(ctx, width, height);
    console.log(effect.Particles);
    effect.animate();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);
  return (
    <canvas
      className="absolute top-0 left-0 blur-[1px]"
      ref={canvas}
    ></canvas>
  );
});
export default CanvasBg;
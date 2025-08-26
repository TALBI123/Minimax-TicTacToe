import "./canvas.css";
import CanvasText from "./canvasText";
export default function Home({ handleClick }) {
  return (
    <section className="h-[90%] w-[90%] flex-center relative z-10 " >
      <CanvasText str="Tic Tac Toe"/>
      <h1 className="absolute top-10  text-9xl bg-gradient-to-r from-[#5adaff] to-[#5468ff] bg-clip-text text-transparent bangers-regular">
        
      </h1>

      <div
        className="text-white text-lg font-bold righteous-regular  py-4 bg-blue-600 w-[200px] rounded-md cursor-pointer hover:bg-blue-700 flex-center btn-blue"
        onClick={handleClick}
      >
        Start
      </div>
    </section>
  );
}
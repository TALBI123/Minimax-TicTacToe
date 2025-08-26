import { useRef, useState, createContext } from "react";
import CanvasBg from "./component/Canvas-bg";
import "./App.css";
import Home from "./component/Home";
import Mode from "./component/Mode";
import Board from "./component/Board";
import Options from "./component/Options";
export const OptionsContext = createContext();
function App() {
  const [clickInBtnIndex, setIsClickedInBtnIndex] = useState(0);
  const sections = [Home, Mode, Options, Board];
  const ActiveSection = sections[clickInBtnIndex];

  const options = useRef({ player: "", mode: false });
  const handleClick = ({ target }) => {
    switch (target.getAttribute("name")) {
      case "mode":
        options.current.mode = +target.getAttribute("value");
        // console.log(options);
        break;
      case "player":
        options.current.player = target.getAttribute("value");
        // console.log(options);
        break;
    }
    setIsClickedInBtnIndex((prvIndex) => (prvIndex + 1) % sections.length);
  };
  return (
    <>
      <div className="relative h-[100vh]  w-[100vw] bg-slate-950 overflow-hidden flex-center ">
        <CanvasBg />
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] -z-0"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <OptionsContext value={options.current}>
          <ActiveSection handleClick={handleClick} />
        </OptionsContext>
      </div>
    </>
  );
}
export default App;

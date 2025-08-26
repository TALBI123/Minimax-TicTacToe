import { useContext, useState } from "react";
import { OptionsContext } from "../App";
const ROW = 3;
const COL = 3;
const resetBoerd = () => Array.from({ length: 3 }, () => Array(3).fill(" "));
export default function Board() {
  const { player, mode } = useContext(OptionsContext);
  const [clickedButtons, setClickedButtons] = useState(
    Array(ROW * COL).fill(0)
  );
  const [game, setGame] = useState({
    boerd: resetBoerd(),
    playerTurn: "X",
  });
  const winner = () => {
    let countPlayerOp = 0;
    const { boerd } = game;
    for (let x = 0; x < ROW; x++) {
      for (let y = 0; y < COL; y++) {
        if (x == y && boerd[x][y] == player) countPlayerOp++;
      }
    }
    console.log("\n is it winning",countPlayerOp)
    // if()
  };
  const handleClickBtn = (index) => {
    let newClikcedButtons = [...clickedButtons];
    if (newClikcedButtons[index]) return;
    newClikcedButtons[index] = 1;
    setClickedButtons(newClikcedButtons);
    let indexBtnClikced;
    if (mode) indexBtnClikced = index;
    else {
      console.log("NAN");
    }
    const x = Math.floor(indexBtnClikced / ROW);
    const y = indexBtnClikced % COL;
    let boerd = [...game.boerd];
    boerd[x][y] = game.playerTurn;
    setGame({ boerd, playerTurn: game.playerTurn === "X" ? "O" : "X" });
  };
  return (
    <section className="h-[90%] w-[90%] bg-gray-800 flex-center  z-10 flex-col gap-10">
      <div className="w-[380px] h-[380px] bg-zinc-900 rounded-md shadow-md flex-center flex-col gap-2">
        <div className="flex-center w-[90%] bg-slate-900 h-[18%] rounded-b-md p-3 ">
          <div
            className={`text-blue-400  flex-center righteous-regular text-3xl h-full w-[50%] relative before:absolute before:top-0 before:h-full ${
              game.playerTurn === "O"
                ? "before:translate-x-full"
                : "before:translate-x-0"
            } before:bg-black before:left-0 before:transition-all before:turation-150 before:rounded-md  before:w-full before:will-change-transform before:-z-10 z-10`}
          >
            X
          </div>
          <div className="text-red-400 righteous-regular text-3xl flex-center h-full w-[50%] z-10">
            O
          </div>
        </div>
        <div className="h-[75%] w-[90%] grid grid-cols-3 grid-rows-3 gap-2 p-1 cursor-pointer">
          {Array.from(
            { length: ROW * COL },
            (_, index) => game.boerd[Math.floor(index / ROW)][index % COL]
          ).map((elm, index) => (
            <div
              key={index}
              className={`bg-slate-800 rounded-md shadow-md flex-center text-5xl righteous-regular ${
                elm === "X"
                  ? "text-blue-400"
                  : elm === "O"
                  ? "text-red-400"
                  : ""
              }`}
              dataIndex={index}
              clicked={clickedButtons[index]}
              onClick={() => handleClickBtn(index)}
            >
              {elm}{" "}
            </div>
          ))}
        </div>
      </div>
      <div
        className="btn-blue px-12"
        onClick={() => {
          setClickedButtons(Array(ROW * COL).fill(0));
          setGame({ boerd: resetBoerd(), playerTurn: "X" });
        }}
      >
        Restart
      </div>
    </section>
  );
}
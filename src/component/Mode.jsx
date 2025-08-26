import img2pfrom from "../assets/img2p.png";
import imgBot from "../assets/imgBot.png";
export default function Mode({ handleClick }) {
  return (
    <section className="h-[70%] bg-slate w-[95%] flex-center z-10">
      <div className="w-[55%] h-[300px]   flex-center font-bold text-white gap-10">
        <div className="w-[100%] h-[100%] bg-slate-600 flex-center flex-col gap-10 rounded-md drop-shadow-md">
          <img src={img2pfrom} className="w-[50%] h-[auto] " alt="" />
          <div
            className="flex-center btn-blue h-[45px] rounded-md cursor-pointer w-[90%] righteous-regular"
            onClick={handleClick} name="mode" value="1"
          >
            2 Players
          </div>
        </div>
        <div className="w-[100%] h-[100%] flex-center flex-col bg-slate-50 gap-10 rounded-md drop-shadow-md">
          <img src={imgBot} className="w-[50%] h-[auto] " alt="" />
          <div
            className="flex-center btn-tomato rounded-md cursor-pointer w-[90%] h-[45px] righteous-regular"
            onClick={handleClick} name="mode" value="0"
          >
            Bot
          </div>
        </div>
      </div>
    </section>
  );
}

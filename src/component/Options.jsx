export default function Options({ handleClick }) {
  return (
    <section className="h-[70%] w-[90%]  flex-center z-10">
      <div className="w-[50%] h-[240px] bg-gray-800 rounded-md flex-center flex-col gap-5 font-bold text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-40%] h-[230px] w-[230px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.45),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[60%] h-[230px] w-[230px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.45),rgba(255,255,255,0))] "></div>
        <h1 className="righteous-regular text-3xl">
          Choose <span className="text-red-400">X</span> or{" "}
          <span className="text-blue-400">O</span>
        </h1>
        <div className="flex-center w-[100%] gap-5">
          <div
            className="flex-center  rounded-md cursor-pointer w-[45px] h-[45px] btn-blue righteous-regular z-20"
            onClick={handleClick}
            name="player"
            value="X"
          >
            X
          </div>
          <div
            className="flex-center  rounded-md cursor-pointer w-[45px] h-[45px] btn-tomato z-10 righteous-regular"
            onClick={handleClick}
            name="player"
            value="O"
          >
            O
          </div>
        </div>
        <p className="sulphur-point-bold text-slate-600">
          REMEMBER : X GOES FIRST
        </p>
      </div>
    </section>
  );
}

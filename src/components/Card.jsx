import Button from "./Button";

const Card = ({ width, para, start, btn, hova }) => {
  return (
    <div
      className={` group w-1/2 h-102 p-5 bg-zinc-800 rounded-3xl transition-all duration-500 ease-out hover:bg-violet-500 ${width}`}
    >
      <div>
        <div className="w-full flex items-center justify-between">
          <h1 className="font-semibold">One Heading</h1>
          <h1 className="text-2xl ">→</h1>
        </div>
        <div className="text-3xl font-semibold mt-5">Another Heading...</div>
      </div>

      <div className=" mt-38 ">
        {start === true ? (
          <h1 className="text-7xl font-semibold">Start a Project</h1>
        ) : null}
      </div>
      <div className="mt-5">
        {btn === true ? <Button title="Conatct Us" /> : null}
      </div>

      {para === true ? (
        <p className="mt-65 text-zinc-600 font-semibold transition-colors duration-500 ease-out group-hover:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      ) : null}
    </div>
  );
};

export default Card;

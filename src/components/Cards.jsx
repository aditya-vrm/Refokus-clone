import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto flex items-center gap-1 py-10">
        <Card width={"basis-1/3"} start={false} para={true} btn={false}  />
        <Card width={"basis-2/3"} start={true} para={false} btn={true}/>
      </div>
    </div>
  );
};
export default Cards;

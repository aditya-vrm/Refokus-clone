import React from "react";
import Button from "./Button";

const Product = ({val,mover,count}) => {
    return <div className="w-full h-[23rem] py-5">
        <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between">
            <h1 className="text-4xl font-medium capatilize">{val.title}</h1>
            <div className="w-80 ">
                <p className="mb-10">{val.description}</p>
                <div className="flex items-center gap-10">
                    {val.live && <Button title="Live Now" /> }
                    {val.case && <Button title="Case Study" /> }
                </div>
            </div>
        </div>
        </div>;
};

export default Product;
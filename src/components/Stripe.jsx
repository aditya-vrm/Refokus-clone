import React from "react";

function Stripe({elem}){

return (
        <div className="w-full px-10 py-7 border-2 border-zinc-500 flex items-center justify-between  font-semibold">
            <img  src={elem.url} alt="" />
            <span>{elem.number}</span>
        </div>
    )
}

export default Stripe;
import React, { useState } from "react";
import { motion , useScroll, useMotionValueEvent } from "framer-motion";

const Work = () => {

  const { scrollYProgress } = useScroll()

useMotionValueEvent(scrollYProgress, "change", (latest) => {
  ShowHide(Math.floor(latest*100));
})

  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "40%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "46%",
      left: "34%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "35%",
      left: "42%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "40%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "36%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "40%",
      left: "34%",
      isActive: false,
    },
  ]);

  function ShowHide(scrollVal) {
  const STEP = 1.3;     
  const START = 3;

  setImages((prev) =>
    prev.map((item, index) => ({
      ...item,
      isActive: scrollVal >= START + index * STEP,
    }))
  );
}

  return (
    <div className="w-full">
      <div className=" relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[38vw] font-semibold font-satoshi tracking-tight leading-none select-none  ">
          work
        </h1>
        <h1 className="text-lg font-semibold mt-4 text-zinc-500 mb-30 ">
          Web Design, Webflow Development, Creative Development
        </h1>
        <div className="absolute inset-0 pointer-events-none">
          {images.map(
            (item, index) =>
              item.isActive && (
                <img
                  className="w-60 rounded-xl absolute"
                  style={{ top: item.top, left: item.left }}
                  key={index}
                  src={item.url}
                  alt=""
                />
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;

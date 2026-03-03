import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import arqitel from "../assets/video/ARQITEL.webm";
import cula from "../assets/video/CULA.webm";
import layout from "../assets/video/LAYOUTLAND.webm";
import maniv from "../assets/video/MANIV.mp4";
import ttr from "../assets/video/TTR.webm";

const Products = () => {
  var Products = [
    {
      title: "Arqitel",
      url: "",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Cula",
      url: "",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "Layout Land",
      url: "",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      url: "",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: true,
    },
    {
      title: "Maniv",
      url: "",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: true,
    },
  ];

  const [pos, setpos] = useState(0);

  const mover = (val) => {
    setpos(val * 23);
  };

  return (
    <div className="mt-32 py-20 relative">
      {Products.map((item, index) => (
        <Product val={item} key={index} mover={mover} count={index} />
      ))}
      <div className="w-full h-full absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1]}}
          className="w-[32rem] h-[23rem] absolute left-[30%] top-[4%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1]}}
            className="w-[70%] h-full"
          >
            <video src={arqitel} autoPlay loop muted className="rounded-2xl"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1]}}
            className="w-[70%] h-full "
          >
            <video src={cula} autoPlay loop muted className="rounded-2xl"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1]}}
            className="w-[70%] h-full "
          >
            <video src={layout} autoPlay loop muted className="rounded-2xl"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1]}}
            className="w-[70%] h-full "
          >
            <video src={ttr} autoPlay loop muted className="rounded-2xl"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1]}}
            className="w-[70%] h-full "
          >
            <video src={maniv} autoPlay loop muted className="rounded-2xl"></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;

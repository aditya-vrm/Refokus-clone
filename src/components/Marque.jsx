import { motion } from "framer-motion";
import React from "react";

const Marquee = ({ imagesURL = [] }) => {
  return (
    <div className="w-full overflow-hidden space-y-6">
      
      <motion.div
        className="flex w-max gap-10"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          ease: "linear",
          duration: 18,
          repeat: Infinity,
        }}
      >
        {[...imagesURL, ...imagesURL].map((url, index) => (
          <img
            key={`top-${index}`}
            src={url}
            alt=""
            className="h-12 w-auto object-contain"
          />
        ))}
      </motion.div>

      <motion.div
        className="flex w-max gap-10 my-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 18,
          repeat: Infinity,
        }}
      >
        {[...imagesURL, ...imagesURL].map((url, index) => (
          <img
            key={`bottom-${index}`}
            src={url}
            alt=""
            className="h-12 w-auto object-contain"
          />
        ))}
      </motion.div>

    </div>
  );
};

export default Marquee;

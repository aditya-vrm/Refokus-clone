import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#161618] border-b border-zinc-700">
    <div className="max-w-screen-xl mx-auto py-[1.25rem]  flex items-center justify-between">
      <div className="nleft flex items-center">
        <img
          className="w-[5rem] h-[1.313rem]"
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="Logo"
        />

        <div className="ml-20 flex gap-14">
          {["Home", "Work", "Careeres", "", "News"].map((item, index) =>
            item.length === 0 ? (
              <span key={index} className="w-0.5 h-7 bg-zinc-700"></span>
            ) : (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-sm flex items-center gap-1 "
              >
                {index === 1 ? (
                  <span
                    style={{ boxShadow: "0 0 0.25rem #00FF19" }}
                    className="inline-block w-1 h-1 rounded-full bg-green-500 "
                  ></span>
                ) : null}
                {item}
              </a>
            ),
          )}
        </div>
      </div>

      <Button title="Start a Project" />
    </div>
    </header>
  );
};

export default Navbar;

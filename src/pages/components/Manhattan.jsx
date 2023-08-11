import React from "react";
import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";

const Manhattan = () => {
  return (
    <div className="w-full flex justify-center items-center h-full flex-row">
      <div className="w-1/2 flex flex-col justify-start p-6">
        <h1 className="flex flex-row text-[#f2e9e4] items-center text-5xl gap-4">
          Manhattan Project
          <Icon icon="game-icons:nuclear-bomb" />
        </h1>
        <p className="text-[#f2e9e4] mt-4">
          Oppenheimer led the Manhattan Project, a covert initiative that
          successfully developed the first atomic bomb during World War II.
          Despite raising significant ethical and moral concerns, this project
          also represented the pinnacle of human technological innovation,
          leaving a lasting impact on the historical landscape.
        </p>
        <div className="gap-2 flex flex-row">
          <Link to="/Reminiscene" className="w-1/2">
            <button className="bg-[#f2e9e4] mt-4 h-12 w-full     flex flex-row  items-center justify-center gap-2 hover:gap-4 transition-all hover:border-2 hover:bg-[#22223B] border-[#f2e9e4] hover:text-[#f2e9e4]  ">
              <Icon icon="ic:round-arrow-back" className="h-5 w-5" />
              Back
            </button>
          </Link>
          <Link to="/contact" className="w-1/2">
            <button className=" mt-4 h-12 w-full flex flex-row  items-center justify-center gap-2 hover:gap-4 transition-all border-2 hover:bg-[#f2e9e4] hover:text-[#22223B] border-[#f2e9e4] text-[#f2e9e4]  ">
              <Icon icon="material-symbols:mail" className="h-5 w-5" />
              Contect
            </button>
          </Link>
        </div>
      </div>
      <div className="w-1/2 p-4 flex justify-center items-center">
        <img
          src="https://i.ytimg.com/vi/wZRiLOcn3yU/maxresdefault.jpg"
          className="h-96"
        />
      </div>
    </div>
  );
};

export default Manhattan;
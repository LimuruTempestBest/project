import React from "react";
import "animate.css";
import { Icon } from "@iconify/react";
import apple from "../assets/apple.webp";
import { Link } from "react-router-dom";

const Reminiscene = () => {
  return (
    <div className="bg-Yankees-Blue w-full h-full flex flex-col justify-center items-center gap-3">
      <h1 className="text-4xl text-[#f2e9e4]">Reminiscene of Oppenheimer </h1>
      <div className="w-44 h-44 rounded-full overflow-hidden flex justify-center items-center">
        <img src={apple} className="rounded-full h-48 w-48" />
      </div>
      <p className="text-[#f2e9e4]">J. Robert Oppenheimer</p>
      <div className="flex flex-row  gap-8 text-xl mt-5">
        <Link to="/scientific">
          <button className="bg-[#f2e9e4] h-12 w-80 flex flex-row  items-center justify-center gap-2 hover:gap-4 transition-all hover:border-2 hover:bg-[#22223B] border-[#f2e9e4] hover:text-[#f2e9e4]  ">
            Scientific
            <Icon icon="mingcute:science-line" className="h-6 w-6" />
          </button>
        </Link>
        <Link to="/ManhattanProject">
          <button className="bg-[#f2e9e4] h-12 w-80 flex flex-row  items-center justify-center gap-2 hover:gap-4 transition-all hover:border-2 hover:bg-[#22223B] border-[#f2e9e4] hover:text-[#f2e9e4]  ">
            Manhattan Project
            <Icon icon="nonicons:react-16" className="h-6 w-6" />
          </button>
        </Link>
        <Link to="/HummanityFuture">
          <button className="bg-[#f2e9e4] h-12 w-80 flex flex-row  items-center justify-center gap-2 hover:gap-4 transition-all hover:border-2 hover:bg-[#22223B] border-[#f2e9e4] hover:text-[#f2e9e4]  ">
            Humanity's Future
            <Icon
              icon="streamline:interface-share-user-human-person-share-signal-transmit-user"
              className="h-6 w-6"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Reminiscene;

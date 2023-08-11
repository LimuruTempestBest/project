import React from "react";
import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";

const Techno = () => {
  return (
    <div className="w-full flex justify-center items-center h-full flex-row">
      <div className="w-1/2 flex flex-col justify-start p-6">
        <h1 className="flex flex-row text-[#f2e9e4] items-center text-5xl gap-2">
          Reflections on Techno-Ethics
          <Icon icon="material-symbols:biotech-outline-rounded" />
        </h1>
        <p className="text-[#f2e9e4] mt-4">
          Following the deployment of the atomic bomb, Oppenheimer engaged in
          profound reflections on the ethical consequences of technology. His
          concerns and contemplations triggered a broader discourse on the moral
          and ethical aspects of technological applications. This contemplation
          to some extent impelled reforms within the technological sphere,
          emphasizing a heightened focus on the impact of technological
          advancements on human society and the environment.
        </p>
        <div className="gap-2 flex flex-row">
          <Link to="/revolution" className="w-1/2">
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
        <img src="https://i.redd.it/mw5fmi67nee91.png" className="h-96" />
      </div>
    </div>
  );
};

export default Techno;
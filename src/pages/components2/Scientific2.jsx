import React from "react";
import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";

const Scientific2 = () => {
  return (
    <div className="w-full flex justify-center items-center h-full flex-row">
      <div className="w-1/2 flex flex-col justify-start p-6">
        <h1 className="flex flex-row text-[#f2e9e4] items-center text-5xl gap-2">
          Influence within the Scientific Community
          <Icon icon="streamline:interface-user-square-alternate-square-geometric-human-person-single-user" />
        </h1>
        <p className="text-[#f2e9e4] mt-4">
          Oppenheimer's influence within the scientific field enabled him to
          lead discussions on the nexus of technology and society. His actions
          and viewpoints galvanized thinkers and researchers within the
          scientific community to ponder the limitations and potential of
          technological applications. This, to a certain degree, propelled
          reforms within the technological sector.
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
        <img
          src="https://www.jta.org/wp-content/uploads/2017/01/einstein-oppenheimer-960x600.jpg"
          className="h-96"
        />
      </div>
    </div>
  );
};

export default Scientific2;
import React from "react";
import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";

const Scientific = () => {
  return (
    <div className="w-full flex justify-center items-center h-full flex-row">
      <div className="w-1/2 flex flex-col justify-start p-6">
        <h1 className="flex flex-row text-[#f2e9e4] items-center text-5xl gap-2">
          Scientific Achievements
          <Icon icon="nonicons:react-16" />
        </h1>
        <p className="text-[#f2e9e4] mt-4">
          As an eminent theoretical physicist, Oppenheimer achieved significant
          milestones in the field of science. His work and contributions have
          had a profound impact on atomic physics and quantum mechanics, and his
          ideas and research continue to influence the modern field of physics.
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
          src="https://img1.utuku.imgcdc.com/0x0/ent/20221128/518ba984-02cc-4bad-aa8e-ca700157f14a.jpg"
          className="h-96"
        />
      </div>
    </div>
  );
};

export default Scientific;
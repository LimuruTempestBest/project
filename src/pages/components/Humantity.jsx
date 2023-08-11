import React from "react";
import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";

const Humantity = () => {
  return (
    <div className="w-full flex justify-center items-center h-full flex-row">
      <div className="w-1/2 flex flex-col justify-start p-6">
        <h1 className="flex flex-row text-[#f2e9e4] items-center text-5xl gap-2">
          Concern for Humanity's Future
          <Icon icon="streamline:interface-user-square-alternate-square-geometric-human-person-single-user" />
        </h1>
        <p className="text-[#f2e9e4] mt-4">
          Following the deployment of the atomic bomb, Oppenheimer expressed
          deep apprehension about the future. He invoked a phrase from Indian
          culture to articulate his reflections on the impact of technology on
          the world, revealing his concern for the fate of humanity and a sense
          of nostalgia for its betterment.
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
          src="https://screenagewasteland.com/wp-content/uploads/2022/07/OppenheimerTeaserFeatured.png"
          className="h-96"
        />
      </div>
    </div>
  );
};

export default Humantity;
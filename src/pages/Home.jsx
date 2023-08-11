import React from "react";
import { Link } from "react-router-dom";
import apple from "../assets/apple.webp";
import { Icon } from "@iconify/react";
import "animate.css";
const Home = () => {
  return (
    <div className=" ">
      <div className="flex justify-between w-full p-2 ">
        <div className="flex justify-center items-center w-[32rem] ml-7">
          <div className="flex flex-col  animate__animated animate__fadeInLeft">
            <div className="flex flex-col gap-2">
              <div className="text-[#f2e9e4] text-6xl xl   tracking-wide mt-5">
                Nostalgia
              </div>
              <div className="text-[#f2e9e4] text-6xl   tracking-wide">And</div>
              <div className="text-[#f2e9e4] text-6xl   tracking-wide">
                Reformation
              </div>
              <div className="text-[#c9ada7]  font-semibold  mt-5">
                Welcome to "Nostalgia and Reformation"! We explore the link
                between fond memories and positive change. Robert Oppenheimer,
                the atomic bomb creator, embodies nostalgia and reformation.
                Join us to delve into this connection, shaping the future
                through reflection and innovation!
              </div>
            </div>
            <div>
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
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center w-[36rem] min-h-[95%] mr-10 animate__animated animate__fadeInRight">
            <div>
              <img
                src={apple}
                className="rounded opacity-100 transition duration-300 ease-in-out hover:opacity-70 mt-10"
              />
              <div className="flex items-center justify-center p-3 bg-[#4a4e69]  text-2xl  text-[#f2e9e4] tracking-wider">
                J. Robert Oppenheimer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
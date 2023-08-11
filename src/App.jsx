import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reminiscene from "./pages/Reminiscene";
import { Contact } from "./pages/Contact";
import { Link } from "react-router-dom";
import Revolution from "./pages/Revolution";
import "animate.css";
import Scientific from "./pages/components/Scientific";
import Manhattan from "./pages/components/Manhattan";
import Humantity from "./pages/components/Humantity";
import Manhattan2 from "./pages/components2/Manhattan2.jsx";
import Techno from "./pages/components2/Techno";
import Scientific2 from "./pages/components2/Scientific2";

const App = () => {
  return (
    <div className="w-full h-screen bg-Yankees-Blue overflow-y-auto">
      <nav>
        <div className="flex bg-[#4a4e69] w-full h-28 items-center">
          <div className="flex justify-between w-full p-7">
            <div className="flex flex-rows gap-16 items-center">
              <Link to="/">
                <button className="text-[#f2e9e4] text-4xl tracking-widest ml-7 hover:ease-in-out transform hover:scale-125 transition duration-200 hover:text-[#f5ebe0]">
                  Home
                </button>
              </Link>
              <Link to="/Reminiscene">
                <button className="text-[#f2e9e4] text-4xl tracking-wide hover:ease-in-out transform hover:scale-125 transition duration-200 hover:text-[#f5ebe0]">
                  Reminiscence
                </button>
              </Link>
              <Link to="/revolution">
                <button className="text-[#f2e9e4] text-4xl tracking-wide hover:ease-in-out transform hover:scale-125 transition duration-200 hover:text-[#f5ebe0]">
                  Revolution
                </button>
              </Link>
            </div>
            <Link to="/contact">
              <div className="flex flex-rows gap-16 items-center mr-10">
                <button className="text-[#f2e9e4] text-4xl   tracking-wide hover:ease-in-out transform hover:scale-125 transition duration-200 hover:text-[#f5ebe0]">
                  Contact
                </button>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <main className="h-[80%]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Reminiscene" element={<Reminiscene />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/revolution" element={<Revolution />} />
          <Route path="/scientific" element={<Scientific />} />
          <Route path="/ManhattanProject" element={<Manhattan />} />
          <Route path="/HummanityFuture" element={<Humantity />} />
          <Route path="/ManhattanProjectImpact" element={<Manhattan2 />} />
          <Route path="/Thechno-Ethics" element={<Techno />} />
          <Route path="/scientificCommunity" element={<Scientific2 />} />
        </Routes>
      </main>
    </div>
  );
};
export default App;
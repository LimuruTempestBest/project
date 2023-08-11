import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link, useNavigate } from "react-router-dom";
import "animate.css";
export const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uhkr45e",
        "template_ueqe2cn",
        form.current,
        "LMO-fwGuLVCOuYdTy"
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="bg-Yankees-Blue w-full absolute top-40 2xl:top-56 animate__animated animate__fadeInLeft">
      <div className="flex justify-center items-center">
        <div className="flex">
          <div className="flex flex-col gap-6 p-10 bg-[#685c66] rounded">
            <div className=" font-black tracking-wider text-3xl underline underline-2 mt-3">
              Contact us!
            </div>
            <div className=" font-black tracking-wider text-2xl mt-10">
              Tell us if there is bug.
            </div>
            <div className=" font-black tracking-wider text-2xl">or</div>
            <div className=" font-black tracking-wider text-2xl">
              Give some suggestion.
            </div>
            <div className=" font-black tracking-wider text-2xl mt-16">
              We will fix it soon.
            </div>
          </div>
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#9a8c98] rounded"
            >
              <label className=" font-black tracking-wider text-2xl">
                Name
              </label>
              <input
                className=" w-80 h-12 tracking-wider px-2 border-2 border-slate-950"
                type="text"
                placeholder="Daniel"
                name="user_name"
              />
              <label className=" font-black tracking-wider text-2xl">
                Email
              </label>
              <input
                className=" w-80 h-12 tracking-wider px-2 border-2 border-slate-950"
                type="email"
                placeholder="jb210286@foonyew.edu.my"
                name="user_email"
              />
              <label className=" font-black tracking-wider text-2xl">
                Message
              </label>
              <textarea
                className=" tracking-wider w-80 h-16 p-2 border-2 border-slate-950"
                placeholder="Your message here..."
                name="message"
              />
              <input
                className="mt-2  font-black tracking-wider text-xl px-7 py-5 bg-[#f2e9e4] border-2 border-slate-950 hover:cursor-pointer"
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
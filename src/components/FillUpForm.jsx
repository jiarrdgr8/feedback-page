import React from "react";
import { TiArrowForward } from "react-icons/ti";

const FillUpForm = () => {
  return (
    <div className="text-slate-300  justify-between align-middle items-center flex-col bg-blue-700 my-auto pt-10 pb-20 px-20 rounded-md ">
      <form action="" method="post">
        <div className="flex flex-col justify-center items-center pt-10">
          <div className="flex my-2 ">
            <div className="flex flex-col border-b-2 mx-4">
              <label className="capitalize  py-1 text-xl">Name*</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="bg-transparent focus:outline-none pb-1"
              />
            </div>
            <div className="flex flex-col border-b-2 mx-4">
              <label className="capitalize  py-1 text-xl">Email*</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="bg-transparent focus:outline-none pb-1"
              />
            </div>
          </div>
          <div className="flex my-2">
            <div className="flex flex-col border-b-2 mx-4">
              <label className="capitalize  py-1 text-xl">Job Title</label>
              <input
                type="text"
                name="job title"
                placeholder="Job Title (Optional)"
                className="bg-transparent focus:outline-none pb-1"
              />
            </div>
            <div className="flex flex-col border-b-2 mx-4">
              <label className="capitalize  py-1 text-xl">Company</label>
              <input
                type="text"
                name="company"
                placeholder="Company (Optional)"
                className="bg-transparent focus:outline-none pb-1"
              />
            </div>
          </div>
          <div className="w-full mx-auto mt-10 text:3xl">
            <div className="">
              <button className="flex justify-center align-middle items-center  bg-blue-800 py-2 w-full text-white font-bold rounded-md">
                <span className="mr-1">
                  <TiArrowForward />
                </span>
                Next
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FillUpForm;

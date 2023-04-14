import React from "react";
import { BsChevronLeft } from "react-icons/bs";

const Fantastic = () => {
  return (
    <div className="flex flex-col justify-start align-middle text-left w-[480px] py-12  my-auto text-slate-300 ">
      <div className="flex items-center align-middle ">
        <span className="mr-1">
          <BsChevronLeft />
        </span>
        <h3 className="text-2xl ">Fantastic!</h3>
      </div>
      <h4 className="my-5 text-xl flex items-center ml-5 ">
        Please tell us more about your experience online!
      </h4>
      <h5 className="ml-5 ">
        This will help other people find us based on your experience
      </h5>
    </div>
  );
};

export default Fantastic;

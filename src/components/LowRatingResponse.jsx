import React from "react";
import { BsChevronLeft } from "react-icons/bs";

const LowRatingResponse = () => {
  return (
    <div className="flex flex-col justify-start align-middle text-left w-[480px] py-12  my-auto text-slate-300 ">
      <div className="flex items-center align-middle ">
        <span className="mr-1">
          <BsChevronLeft />
        </span>
        <h3 className="text-2xl ">We'd love to be better next time.</h3>
      </div>
      <h4 className="my-5 text-xl flex items-center ml-5 ">
        Why did you give a rating of 2 stars?
      </h4>
      <h5 className="ml-5 ">
        Let us know exactly what went wrong so that we can improve our
        offerings.
      </h5>
    </div>
  );
};

export default LowRatingResponse;

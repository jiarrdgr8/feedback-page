import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { decrementPage } from "../redux/counter";

const TellUsYourStory = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-start align-middle text-left w-[480px] py-12  my-auto text-slate-300 ">
      <div
        className="flex align-middle cursor-pointer hover:scale-105 duration-300"
        onClick={() => dispatch(decrementPage())}
      >
        <span className="mr-1 pt-2">
          <BsChevronLeft />
        </span>
        <h3 className="text-2xl ">
          We'd love to know what made your experience great.
        </h3>
      </div>
      <h4 className="my-5 text-xl flex items-center ml-5 ">
        Tell us your story!
      </h4>
    </div>
  );
};

export default TellUsYourStory;

import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { decrementPage } from "../redux/counter";

const LastMessage = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-start align-middle text-left w-[480px] py-12  my-auto text-slate-300 ">
      <div
        className="flex items-center align-middle cursor-pointer hover:scale-105 duration-300"
        onClick={() => dispatch(decrementPage())}
      >
        <span className="mr-1">
          <BsChevronLeft />
        </span>
        <h3 className="text-2xl ">Lastly,</h3>
      </div>
      <h4 className="my-5 text-xl flex items-center ml-5 ">
        We'd love to put a name to the feedback.
      </h4>
      <h5 className="ml-5 ">Please provide your contact details below.</h5>
      <div className="ml-5 my-5 flex items-center">
        <span className="mr-2">
          <AiFillCheckCircle />
        </span>
        <h5>
          We'll use your information ONLY to contact you about your feedback.
        </h5>
      </div>
    </div>
  );
};

export default LastMessage;

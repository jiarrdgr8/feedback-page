import React from "react";
import { RxDividerVertical } from "react-icons/rx";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { incrementPage } from "../redux/counter";

const Welcome = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center align-middle text-center w-[480px] py-12 px-10 my-auto mx-20 bg-blue-800 text-slate-300 rounded-md ">
      <h3 className="text-2xl my-5">Welcome!</h3>
      <div className="my-5 text-xl flex items-center">
        <span className="text-blue-500">
          <RxDividerVertical />
        </span>
        <h4>We'd love to know how we're doing.</h4>
      </div>

      <div className="my-5 flex items-center align-middle">
        <span className="text-3xl text-white pt-2 w-20">
          <ion-icon name="chatbubbles-outline"></ion-icon>
        </span>
        <h4 className="p-4 text-xl">
          Tell us about your experience or leave a review. You can also share
          your experience with friends online
        </h4>
      </div>
      <button
        className="flex items-center justify-center bg-blue-600 text-xl px-5 py-2 rounded-md font-bold w-full  mx-auto hover:scale-105 duration-300"
        onClick={() => dispatch(incrementPage())}
      >
        <span>Let's Go!</span>
        <FaLongArrowAltRight className="text-white ml-3" />
      </button>
    </div>
  );
};

export default Welcome;

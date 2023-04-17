import React from "react";
import { TiArrowForward } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { incrementPage } from "../redux/counter";

const LowRatingMessage = () => {
  const dispatch = useDispatch();

  return (
    <div className="text-slate-300 flex justify-between align-middle items-center flex-col bg-blue-700 my-auto pt-10 pb-20 px-10 rounded-md relative w-[400px] md:w-2/5">
      <form action="" method="post" className="w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-5 w-full mx-auto">
            <textarea
              name="message"
              rows="4"
              className="flex outline-none bg-transparent resize-none w-full p-5"
            ></textarea>
          </div>
          <div className="w-4/5 absolute bottom-5 rounded-lg">
            <button
              className="flex justify-center align-middle items-center bg-blue-800 py-2 w-full text-white font-bold rounded-lg"
              onClick={() => dispatch(incrementPage())}
            >
              <span className="mr-1 ">
                <TiArrowForward />
              </span>
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LowRatingMessage;

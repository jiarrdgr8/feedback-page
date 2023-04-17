import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../redux/counter";

const LowRatingResponse = () => {
  const { rate } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-start align-middle text-left w-[480px] py-12  my-auto text-slate-300 ">
      <div
        className="flex items-center align-middle cursor-pointer hover:scale-105 duration-300"
        onClick={() => dispatch(setPage(2))}
      >
        <span className="mr-1">
          <BsChevronLeft />
        </span>
        <h3 className="text-2xl ">We'd love to be better next time.</h3>
      </div>
      <h4 className="my-5 text-xl flex items-center ml-5 ">
        Why did you give a rating of {rate} star{rate === 1 ? "" : "s"}?
      </h4>
      <h5 className="ml-5 ">
        Let us know exactly what went wrong so that we can improve our
        offerings.
      </h5>
    </div>
  );
};

export default LowRatingResponse;

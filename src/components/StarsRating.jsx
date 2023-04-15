import React, { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setRate } from "../redux/counter";

const StarsRating = () => {
  const { page, rate } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [hoverValue, setHoverValue] = useState(undefined);

  const rating = [
    { id: 1, color: "text-white" },
    { id: 2, color: "text-white" },
    { id: 3, color: "text-white" },
    { id: 4, color: "text-white" },
    { id: 5, color: "text-white" },
  ];

  const handleMouseOver = (value) => {
    setHoverValue(value);
    console.log(hoverValue);
  };

  const handleMouseLeave = (value) => {
    setHoverValue(undefined);
  };

  return (
    <div className="text-slate-300 flex justify-center align-middle items-center flex-col bg-blue-700 my-auto pt-10 pb-20 px-20 rounded-md">
      <div className="flex align-middle items-center ">
        <span className="pr-1">
          <AiOutlineCaretDown />
        </span>
        <h5>Choose one</h5>
      </div>
      <div className="flex pt-5">
        {rating.map((rating, i) => {
          return (
            <span
              key={rating.id}
              className={`${rating.color} text-5xl px-1 cursor-pointer   ${
                hoverValue > rating.id - 1 ? "text-yellow-400" : ""
              }`}
              onClick={() => dispatch(setRate(rating.id))}
              onMouseOver={() => handleMouseOver(rating.id)}
              onMouseLeave={() => handleMouseLeave(undefined)}
            >
              <FaStar className="" />
            </span>
          );
        })}
        {/* {console.log(hoverValue)} */}
      </div>
    </div>
  );
};

export default StarsRating;

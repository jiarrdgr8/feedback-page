import React, { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const StarsRating = () => {
  const [rate, setRate] = useState(0);
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
    // console.log(hoverValue);
  };

  const handleMouseLeave = (value) => {
    setHoverValue(undefined);
  };

  const handleSubmit = (id) => {
    setRate(id);
    // console.log(id);
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
              className={`${rating.color} text-5xl px-1 cursor-pointer ${
                hoverValue > rating.id - 1 ? "text-blue-800" : " "
              }`}
              onClick={(e) => handleSubmit(rating.id)}
              onMouseOver={() => handleMouseOver(rating.id)}
              onMouseLeave={handleMouseLeave}
            >
              <FaStar className="" />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default StarsRating;

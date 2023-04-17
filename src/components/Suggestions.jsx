import React from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../redux/counter";

const Suggestions = () => {
  const dispatch = useDispatch();

  const suggestions = [
    { id: 1, title: "Add more flavors", ischecked: false },
    { id: 2, title: "Next day delivery", ischecked: false },
    { id: 3, title: "Catering for events and parties", ischecked: false },
  ];

  return (
    <div className="text-slate-300 flex flex-col justify-center  ">
      <div className="text-slate-300 flex justify-center align-middle items-center flex-col bg-blue-700 py-10 px-20 rounded-lg">
        {suggestions.map((item) => {
          return (
            <div className="flex border-white ">
              <span> </span> <h2>{item.title}</h2>
            </div>
          );
        })}
      </div>
      <div
        className="flex justify-end pt-3 text-sm cursor-pointer hover:scale-105 duration-300"
        onClick={() => dispatch(setPage(6))}
      >
        <h2>X Clear answer</h2>
      </div>
    </div>
  );
};

export default Suggestions;

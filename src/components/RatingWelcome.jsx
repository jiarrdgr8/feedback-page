import React from "react";

const RatingWelcome = () => {
  return (
    <div className="flex flex-col justify-start align-middle text-left w-[480px] py-12  my-auto text-slate-300  ">
      <h3 className="text-2xl mt-5">Welcome!</h3>
      <h4 className="my-5 text-xl flex items-center">
        How would you rate your experience with Cupcake Central?
      </h4>
      <h5>Choose one</h5>
    </div>
  );
};

export default RatingWelcome;

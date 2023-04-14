import React from "react";
import { TiArrowForward } from "react-icons/ti";

const LowRatingMessage = () => {
  const [message, setMessage] = "";

  const handleChange = (e) => {
    const handleChange = (e) => {
      setMessage(e.target.value);
    };
  };

  return (
    <div className="text-slate-300 flex justify-between align-middle items-center flex-col bg-blue-700 my-auto pt-10 pb-20 px-20 rounded-md relative">
      <form action="" method="post">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="mb-5 w-full mx-auto">
            <textarea
              name="message"
              rows="4"
              className="p-3 flex outline-none bg-transparent  resize-none w-full"
            ></textarea>
          </div>
          <div className="w-4/5 absolute bottom-5 rounded-lg">
            <button className="flex justify-center align-middle items-center bg-blue-800 py-2 w-full text-white font-bold">
              <span className="mr-1">
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

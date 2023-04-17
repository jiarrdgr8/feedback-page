import React from "react";
import { TiArrowForward } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { incrementPage } from "../redux/counter";
import { useState } from "react";
import { RxAvatar } from "react-icons/rx";

const Story = () => {
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(null);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(file);
    }
  };

  const handleClear = () => {
    setMessage("");
  };

  const handleSubmit = () => {
    //form submission logic here
    dispatch(incrementPage());
  };

  return (
    <div className="w-[400px] md:w-1/3">
      <div className="text-slate-300 flex justify-between align-middle items-center flex-col bg-blue-700 my-auto pt-10 pb-20 px-5 rounded-lg relative w-full">
        <form action="" method="post" className="w-5/6">
          <div className="flex items-center absolute translate-y-[-110%]">
            <span className="inline-block h-20 w-20 rounded-full overflow-hidden">
              {avatar ? (
                <img
                  src={URL.createObjectURL(avatar)}
                  alt="avatar"
                  className="h-full w-full object-cover rounded-full"
                />
              ) : (
                <RxAvatar className="h-full w-full" />
              )}
            </span>
            <label
              htmlFor="file-input"
              className="flex items-center justify-center px-4 py-2 text-sm text-slate-300 cursor-pointer hover:scale-105 duration-300 "
            >
              <span>Upload picture &gt;</span>
              <input
                type="file"
                name="avatar"
                id="file-input"
                accept=".jpg,.jpeg,.png"
                onChange={handleFileInputChange}
                className="sr-only"
              />
            </label>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="mb-5 w-full mx-auto">
              <textarea
                name="message"
                rows="4"
                className="flex outline-none bg-transparent resize-none w-full p-5 mt-5"
                placeholder="Type your response. Try to share as much as you can."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <textarea
                name="message"
                rows="1"
                className="flex outline-none bg-transparent resize-none w-full p-5"
                placeholder="- Your name here..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></textarea>
            </div>
            <div className="w-4/5 absolute bottom-5 rounded-lg cursor-pointer hover:scale-105 duration-300">
              <button
                className="flex justify-center align-middle items-center bg-blue-800 py-2 w-full text-white font-bold rounded-lg"
                onClick={handleSubmit}
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
      <div
        className="flex justify-end pt-3 cursor-pointer hover:scale-105 duration-300 text-slate-300 text-sm"
        onClick={handleClear}
      >
        <h2>X Clear answer</h2>
      </div>
    </div>
  );
};

export default Story;

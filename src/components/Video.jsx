import React from "react";
import video from "../assets/just_some_random_video.mp4";

const Video = () => {
  return (
    <div className="w-[480px] flex flex-col justify-center items-center">
      <video src={video}></video>
      <p className="text-slate-200 pt-4">Message from Abbie</p>
    </div>
  );
};

export default Video;

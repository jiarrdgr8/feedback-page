import React from "react";
import Video from "../components/Video";
import Welcome from "../components/Welcome";
import RatingWelcome from "../components/RatingWelcome";
import StarsRating from "../components/StarsRating";
import Fantastic from "../components/Fantastic";
import ShareExp from "../components/ShareExp";
import LowRatingResponse from "../components/LowRatingResponse";
import LowRatingMessage from "../components/LowRatingMessage";
import LastMessage from "../components/LastMessage";
import FillUpForm from "../components/FillUpForm";

const FeedbackPage = () => {
  return (
    <div className=" h-screen md:flex justify-around mx-24 ">
      {/* <Video />
      <Welcome /> */}
      {/* <RatingWelcome />
      <StarsRating /> */}
      {/* <Fantastic />
      <ShareExp /> */}
      {/* <LowRatingResponse />
      <LowRatingMessage /> */}
      <LastMessage />
      <FillUpForm />
    </div>
  );
};

export default FeedbackPage;

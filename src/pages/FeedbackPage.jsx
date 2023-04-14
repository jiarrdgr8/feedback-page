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
import { useDispatch, useSelector } from "react-redux";

const FeedbackPage = () => {
  const { page } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  let pageContent;
  switch (page) {
    case 1:
      pageContent = (
        <>
          <Video />
          <Welcome />
        </>
      );
      break;

    case 2:
      pageContent = (
        <>
          <RatingWelcome />
          <StarsRating />
        </>
      );
      break;

    case 3:
      pageContent = (
        <>
          <Fantastic />
          <ShareExp />
        </>
      );
      break;

    case 4:
      pageContent = (
        <>
          <LowRatingResponse />
          <LowRatingMessage />
        </>
      );
      break;

    case 5:
      pageContent = (
        <>
          <LastMessage />
          <FillUpForm />
        </>
      );
      break;

    default:
      pageContent = (
        <>
          <Video />
          <Welcome />
        </>
      );
  }

  return (
    <div className="h-screen md:flex justify-around mx-24">{pageContent}</div>
  );
};

export default FeedbackPage;

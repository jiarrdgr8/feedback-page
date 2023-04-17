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
import { useSelector } from "react-redux";
import TellUsYourStory from "../components/TellUsYourStory";
import Story from "../components/Story";
import HelpUsGrow from "../components/HelpUsGrow";
import Suggestions from "../components/Suggestions";

const FeedbackPage = () => {
  const { page } = useSelector((state) => state.counter);

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
          <LowRatingResponse />
          <LowRatingMessage />
        </>
      );
      break;

    case 4:
      pageContent = (
        <>
          <LastMessage />
          <FillUpForm />
        </>
      );
      break;

    case 5:
      pageContent = (
        <>
          <Fantastic />
          <ShareExp />
        </>
      );
      break;

    case 6:
      pageContent = (
        <>
          <TellUsYourStory />
          <Story />
        </>
      );
      break;

    case 7:
      pageContent = (
        <>
          <HelpUsGrow />
          <Suggestions />
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
    <div className="h-screen flex flex-col md:flex-row justify-around align-middle items-center mx-20">
      {pageContent}
    </div>
  );
};

export default FeedbackPage;

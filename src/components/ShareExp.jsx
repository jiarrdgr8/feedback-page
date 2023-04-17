import React from "react";
import google from "../assets/google.png";
import fb from "../assets/fb.png";
import twitter from "../assets/twitter.png";
import { useDispatch } from "react-redux";
import { setPage } from "../redux/counter";

const ShareExp = () => {
  const dispatch = useDispatch();

  const links = [
    {
      id: 1,
      title: "Review on Google",
      bg: "bg-white",
      text: "text-gray-800",
      image: google,
      review_url: "https://www.google.com/", // URL of the establishment review at google
    },
    {
      id: 2,
      title: "Review on Facebook",
      bg: "bg-blue-900",
      text: "text-white",
      image: fb,
      review_url: "https://www.facebook.com/", // URL of the establishment review at facebook
    },
    {
      id: 3,
      title: "Share on Facebook",
      bg: "bg-blue-900",
      text: "text-white",
      image: fb,
      review_url: "https://www.facebook.com/", // customized URL to share on facebook
    },
    {
      id: 4,
      title: "Tweet",
      bg: "bg-blue-400",
      text: "text-white",
      image: twitter,
      review_url: "https://www.twitter.com/", // customized URL to share on twitter
    },
  ];

  const handleClick = () => {};

  return (
    <div className="text-slate-300 flex flex-col justify-center  ">
      <div className="text-slate-300 flex justify-center align-middle items-center flex-col bg-blue-700 py-10 px-20 rounded-lg">
        {links.map((link) => {
          return (
            <a
              href={link.review_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <div
                key={link.id}
                className={`flex ${link.text}  text-xl justify-between items-center py-2 px-8 rounded-md ${link.bg}  my-4 cursor-pointer hover:scale-105 duration-300`}
                onClick={handleClick}
              >
                <h3>{link.title}</h3>
                <span className="w-9 inline-block">
                  <img src={link.image} alt="review" className="ml-3 w-full" />
                </span>
              </div>
            </a>
          );
        })}
      </div>
      <div
        className="flex justify-end pt-3 cursor-pointer hover:scale-105 duration-300"
        onClick={() => dispatch(setPage(6))}
      >
        <h2>No thanks &gt;</h2>
      </div>
    </div>
  );
};

export default ShareExp;

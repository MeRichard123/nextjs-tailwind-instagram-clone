import React from "react";
import { useMediaQuery } from "react-responsive";
import {
  FiMoreHorizontal,
  FiHeart,
  FiMessageCircle,
  FiSend,
  FiBookmark,
} from "react-icons/fi";

const Post = ({ sizeLg, sizeSm, image, name }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const RandomRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div className="lg:m-4 mb-10 lg:mb-20">
      <div className="flex items-center mb-2 justify-between">
        <div className="flex items-center">
          <img src={image} alt="" className="h-6 w-6 rounded-full" />
          <div className="ml-2 leading-loose">{name}</div>
        </div>
        <div className="mr-2">
          <FiMoreHorizontal
            size="1.5rem"
            className="transform hover:scale-105 cursor-pointer"
          />
        </div>
      </div>
      {isTabletOrMobile && (
        <img
          src={`https://source.unsplash.com/random/${sizeSm}x${sizeSm}`}
          alt=""
        />
      )}
      {isDesktopOrLaptop && (
        <img
          src={`https://source.unsplash.com/random/${sizeLg}x${sizeLg}`}
          alt=""
        />
      )}
      <div className="flex justify-between mx-1 mt-2">
        <div className="flex">
          <FiHeart
            size="1.5rem"
            className="m-1 cursor-pointer transform hover:scale-105"
          />
          <FiMessageCircle
            size="1.5rem"
            className="m-1 cursor-pointer transform hover:scale-105"
          />
          <FiSend
            size="1.5rem"
            className="m-1 cursor-pointer transform hover:scale-105"
          />
        </div>
        <FiBookmark
          size="1.5rem"
          className="m-1 mr-2 cursor-pointer transform hover:scale-105"
        />
      </div>
      <p className="ml-2 mt-2 font-semibold text-sm">
        {RandomRange(1, 1000)} Likes
      </p>
      <p className="text-sm ml-2 mt-2">
        <span className="font-bold text-sm mt-4">{name}</span> Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Dicta, quis.
      </p>
      <p className="text-xs font-extralight uppercase ml-2 mt-3">
        {RandomRange(1, 24)} Hours Ago
      </p>
    </div>
  );
};

export default Post;

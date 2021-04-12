import React from "react";
import Footer from "./Footer";

const Sidebar = () => {
  const names = ["Nora", "Eldirene", "Levina", "Carlos", "Lonnie"];
  return (
    <div className="w-2/5 mt-5 ml-1 ">
      {/* Your Profile */}
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <div className="h-14 w-14 bg-green-400 rounded-full mr-3"></div>
          <div className="m-2">
            <p>Richard</p>
            <p className="text-gray-500 font-light">Web Development Life</p>
          </div>
        </div>

        <p className="m-2 text-xs text-blue-600 cursor-pointer">Switch</p>
      </div>
      <div className="flex">
        <p className="text-gray-500 mt-5 font-semibold flex-grow">
          Suggestions For You
        </p>
        <p className="mt-5 text-sm">See All</p>
      </div>
      {Array.from(Array(5).keys()).map((number) => (
        <div className="flex items-center justify-between w-full" key={number}>
          <div className=" flex items-center">
            <div className="w-8 h-8 m-3 bg-pink-700 rounded-full">
              <img
                src={`https://source.unsplash.com/user/goodfacesclub/${
                  120 + number
                }x${120 + number}`}
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="">
              <p className="text-xs font-bold">{names[number]}</p>
              <p className="text-xs text-gray-500">
                {number % 3 === Math.floor(Math.random())
                  ? "New To Instagram"
                  : "Follows You"}
              </p>
            </div>
          </div>

          <p className=" text-blue-600 text-xs mt-2 cursor-pointer">Follow</p>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Sidebar;

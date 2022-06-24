import React from "react";
import Greeting from "./greetings/Greeting";
import Temperature from "./temperature";
import Tips from "./tips";
import Widgets from "./widgets";

export default function Dashboard() {
  return (
    <div className="py-10 sm:px-8 md:py-10 md:px-2 xl:p-16 w-full relative">
      <Greeting />
      <div className="flex flex-col lg:flex-row  w-full">
        <div className="flex flex-col flex-wrap py-4 sm:p-4 items-center w-full lg:w-7/12">
          <Temperature />
          <Widgets />
        </div>
        <div className="flex flex-wrap justify-center items-center md:8/12 lg:w-5/12 scale-100 lg:scale-110 xl:scale-100">
          <img
            src="/pic3.svg"
            alt=""
            className="w-full dark:hidden select-none pointer-events-none"
            draggable={false}
          />
          <img
            src="/pic3_dark.svg"
            alt=""
            className="w-full hidden dark:block select-none pointer-events-none"
            draggable={false}
          />
        </div>
      </div>
      <div className="">
        <Tips />
      </div>
    </div>
  );
}

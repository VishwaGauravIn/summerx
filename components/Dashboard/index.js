import React from "react";
import Greeting from "./greetings/Greeting";
import Temperature from "./temperature";
import Tips from "./tips";
import Widgets from "./widgets";

export default function Dashboard() {
  return (
    <div className="md:p-16 w-full">
      <Greeting />
      <div className="flex flex-row flex-wrap w-full">
        <div className="flex flex-col flex-wrap p-4 items-center w-7/12">
          <Temperature />
          <Widgets />
        </div>
        <div className="flex justify-center items-center w-5/12">
          <img src="/pic3.svg" alt="" className="w-full dark:hidden" />
          <img src="/pic3_dark.svg" alt="" className="w-full hidden dark:block" />
        </div>
      </div>
      <div className="">
        <Tips />
      </div>
    </div>
  );
}

import React from "react";
import { Tick } from "../../elements/SVGs";

export default function Features() {
  return (
    <div>
      <div className="text-center text-xl lg:text-3xl xl:text-4xl mt-12 lg:mt-24 xl:mt-36  ">
        No Need To Worry!
        <div className="font-bold text-primary-900  dark:text-secondary-200 my-4 text-3xl lg:text-6xl">
          Here is Best and Simple Solution
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 lg:gap-6 xl:gap-8 w-[90%] mt-8 mx-auto lg:mt-20">
          {[
            "Heat wave warning",
            "Reminder",
            "Medical Advice",
            "Community Support",
            "Weather ",
            "Music",
            "Lot more Features",
          ].map((name) => (
            <Box key={name}>{name}</Box>
          ))}
          <div className="flex flex-row items-start gap-4 ">All for FREE!</div>
        </div>
      </div>
      <div className="my-12 py-8 text-center">
        {" "}
        <a
          href="#"
          className="no-underline text-3xl xl:text-4xl  px-8 py-4 rounded-full text-secondary-500 bg-primary-500 dark:bg-secondary-500 dark:text-primary-500 text-center outline outline-4 outline-secondary-600 dark:outline-primary-400 "
        >
          Explore Babe!
        </a>
      </div>
    </div>
  );
}
function Box({ children }) {
  return (
    <div className="flex flex-row items-start gap-4 ">
      <Tick className="w-6 md:w-8 lg:w-12" />
      <div>{children}</div>
    </div>
  );
}

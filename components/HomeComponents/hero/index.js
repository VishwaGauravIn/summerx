import React from "react";
import { AnimateText } from "../../elements/AnimatedText";
import { Summer_hero } from "../../elements/SVGs";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row mt-8 lg:mt-12 xl:mt-24 justify-center">
      <div className="basis-2/3 flex flex-col gap-4 lg:gap-3 xl:gap-8 pl-3 lg:pl-6 py-12">
        <div>
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-primary-400 dark:text-secondary-600">
            We are on a Mission
          </div>{" "}
          <br />
          <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold capitalize">
            To Save lives
          </div>
        </div>
        <div>
          <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal text-primary-500 dark:text-secondary-600">
            Occured due to
          </div>
          <div className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium my-4">
            <AnimateText
              texts={["Summer", "Excssive Heat", "Dehydration", "Illness"]}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 mt-8 lg:mt-12 xl:mt-16">
            <a
              href="#"
              className="no-underline text-2xl xl:text-3xl px-4 py-2 rounded-full text-secondary-500 bg-primary-500 dark:bg-secondary-500 dark:text-primary-500 text-center outline outline-4 outline-secondary-600 dark:outline-primary-400"
            >
              Primary button
            </a>
            <a
              href="#"
              className="no-underline text-2xl xl:text-3xl px-4 py-2 rounded-full text-primary-400 bg-secondary-600 dark:bg-secondary-100 dark:text-primary-500 text-center outline outline-4 outline-secondary-900 dark:outline-primary-100"
            >
              Secondary button
            </a>
          </div>
        </div>
      </div>
      <div className="basis-1/3 text-center">
        <Summer_hero className="p-4 w-[80%] lg:w-[90%] mt-0 mx-auto animate-bouncy" />
      </div>
    </div>
  );
}

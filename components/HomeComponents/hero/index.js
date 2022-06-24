import React from "react";
import { AnimateText } from "../../elements/AnimatedText";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row mt-8 lg:mt-12 xl:mt-24 justify-center dark:text-zinc-200 text-primary">
      <div className="basis-6/12 flex flex-col gap-4 lg:gap-3 xl:gap-8 sm:pl-3 lg:pl-6 py-8 sm:py-10 md:py-12">
        <div>
          <div className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-light opacity-70 mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6">
            We are on a Mission
          </div>
          <div className="text-5xl sm:text-7xl md:text-6xl lg:text-7xl xl:text-8xl font-bold capitalize">
            To Save lives
          </div>
        </div>
        <div>
          {/* <div className="2xl:text-4xl font-normal mt-10">
            Occured due to
          </div>
          <div className="2xl:text-7xl font-medium my-4">
            <AnimateText
              texts={["Summer", "Excssive Heat", "Dehydration", "Illness"]}
            />
          </div> */}
          {/* TODO: Buttons Design */}
        </div>
      </div>
      <div className="basis-5/12 text-center p-4 w-[80%] lg:w-[90%] mt-0 mx-auto animate-bouncy ">
        <img src="/hero.svg" alt="" className="hidden dark:block" />
        <img src="/hero_dark.svg" alt="" className="block dark:hidden" />
      </div>
    </div>
  );
}

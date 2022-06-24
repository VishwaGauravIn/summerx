import React from "react";
import { Chart, Fall, Person_Left } from "../../elements/SVGs";

export default function GlobalStats() {
  return (
    <>
      <div className="text-center text-xl lg:text-3xl xl:text-4xl my-12 lg:my-24 xl:my-36">
        What&apos;s happening around globe due to Summer (per year)
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4 md:gap-6 lg:gap-8 xl:gap-12 w-[90%] mt-8 mx-auto flex-wrap  lg:mt-20">
          <Box>
            <Person_Left className="w-[70%] mt-0 mx-auto stroke-[1.6]" />
            160K+ lost their lives
          </Box>
          <Box>
            <Fall className="w-[70%] mt-0 mx-auto  stroke-[1.6]" />
            5% fall in GDP
          </Box>
          <Box>
            <Chart className="w-[70%] mt-0 mx-auto  stroke-[1.6]" />
            0.03% rise in water level
          </Box>
        </div>
      </div>
    </>
  );
}
function Box({ children }) {
  return (
    <div className="transition cursor-pointer text-center w-48 rounded-2xl bg-primary p-6 text-secondary dark:bg-secondary dark:text-primary ring-8 ring-primary/20 dark:ring-secondary/20 text-xl hover:scale-95 flex-shrink-0 flex flex-col gap-4 justify-evenly ">
      {children}
    </div>
  );
}

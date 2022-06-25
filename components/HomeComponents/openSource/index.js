import React from "react";
import { Github_logo } from "../../elements/SVGs";

export default function OpenSource() {
  return (
    <div className="flex flex-col md:flex-row my-8 text-primary-600 dark:text-secondary-500 mt-12 lg:mt-20 xl:mt-28">
      <div className="w-full md:w-6/12 flex flex-col justify-center items-center ">
        <Github_logo />
      </div>
      <div className="w-full md:w-6/12 flex flex-col justify-center my-6 md:my-0">
        <p className="text-3xl sm:text-4xl md:text-5xl font-medium">
          We&apos;re Open Source
        </p>
        <p className="text-gray-500 md:pr-10 my-6 md:text-lg 2xl:text-xl">
          Yes you heard right, this website is open source and you can find code
          of this website on GitHub. You can request a feature, contribute to
          project by adding feedbacks and mentioning bugs if they exist.
          <br />
          Let&apos;s Make this project as better as possible together
        </p>
        <a
          href="https://github.com/VishwaGauravIn/summerx"
          className="bg-primary dark:bg-secondary hover:ring-primary/30 ring-8 ring-primary/20 dark:ring-secondary/20 text-secondary dark:text-primary outline-none p-4 text-base md:text-xl lg:text-2xl w-max px-8 my-8 rounded-full transition-all ease-in-out active:scale-95 self-center sm:self-start"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Github
        </a>
      </div>
    </div>
  );
}

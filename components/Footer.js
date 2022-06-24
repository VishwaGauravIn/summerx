import React from "react";

export default function Footer() {
  return (
    <div className="w-full flex justify-center items-center text-primary dark:text-secondary">
      <a
        href="https://github.com/VishwaGauravIn/summerx"
        className=" hover:opacity-95 mt-2 flex"
        target="_blank"
        rel="noopener noreferrer"
      >
        {"</>"} & Crafted with&nbsp;
        <span className="hidden dark:block">💛</span>
        <span className="dark:hidden">🖤</span>
        &nbsp;
      </a>
    </div>
  );
}

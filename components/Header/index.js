import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  //   User prefrence is stored in local storage and checked when the component is loaded
  useEffect(() => {
    if (localStorage.getItem("summerx_darklover") === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  function changeTheme() {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("summerx_darklover", false);
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("summerx_darklover", true);
    }
  }
  return (
    <div className="flex flex-row flex-wrap relative items-center">
      <Link href="/home">
        <div className="flex items-center group cursor-pointer">
          <img
            src="/logo_dark.png"
            alt=""
            className="w-12 dark:hidden group-item group-hover:animate-pulse pointer-events-auto select-none"
            draggable={false}
          />
          <img
            src="/logo.png"
            alt=""
            className="w-12 hidden dark:block group-item group-hover:animate-pulse pointer-events-auto select-none"
            draggable={false}
          />
          <p className="text-3xl font-semibold">SummerX</p>
        </div>
      </Link>
      <button
        className="absolute right-0 active:scale-75 transition-transform ease-in-out outline-none"
        onClick={changeTheme}
      >
        {isDarkMode ? (
          <SunIcon className="w-7 stroke-[1.5] mr-0.5" />
        ) : (
          <MoonIcon className="w-7 stroke-[1.5]" />
        )}
      </button>
    </div>
  );
}

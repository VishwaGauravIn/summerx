import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  //   TODO: Store it in localstorage
  function changeTheme() {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.remove("dark");
    }
  }
  return (
    <div className="flex flex-row flex-wrap relative items-center">
      <p className="text-3xl font-semibold first-letter:border-dashed">
        SummerX
      </p>
      <button
        className="absolute right-0 active:scale-75 transition-transform ease-in-out"
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

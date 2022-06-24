import React from "react";

export default function Widget({ icon, label, onClick }) {
  return (
    <div className="group w-28 h-28 rounded-full flex flex-col mx-6 sm:mx-8 lg:mx-6 xl:mx-8 mb-[72px] justify-center items-center dark:text-primary text-secondary bg-primary dark:bg-secondary transition-all ease-in-out ring-8 ring-primary/20 dark:ring-secondary/20 relative cursor-pointer" onClick={onClick}>
      {icon}
      <p className="absolute w-max -bottom-11 text-base sm:text-xl text-primary dark:text-secondary group-hover:flex font-medium">
        {label}
      </p>
    </div>
  );
}

import React from 'react'

export default function Widget({icon, label}) {
  return (
    <div className="group w-28 h-28 rounded-full flex flex-col mr-12 justify-center items-center dark:text-primary text-secondary bg-primary dark:bg-secondary transition-all ease-in-out ring-8 ring-primary/20 dark:ring-secondary/20 relative">
        {icon}
        <p className="absolute -bottom-11 text-xl opacity-80 hidden text-primary dark:text-secondary group-hover:flex font-semibold uppercase">{label}</p>
      </div>
  )
}

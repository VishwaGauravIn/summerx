import React from 'react'

export default function Widget({icon, label}) {
  return (
    <div className="group border-primary dark:border-secondary border-4 w-28 h-28 rounded-full flex flex-col m-4 justify-center items-center dark:text-secondary dark:hover:text-primary hover:text-secondary text-primary hover:bg-primary dark:hover:bg-secondary transition-all ease-in-out hover:ring-8 ring-primary/20 dark:ring-secondary/20 relative">
        {icon}
        <p className="absolute -bottom-11 text-xl opacity-80 hidden text-primary dark:text-secondary group-hover:flex font-semibold uppercase">{label}</p>
      </div>
  )
}

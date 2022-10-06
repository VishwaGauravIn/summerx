import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Hero() {
  const [username, setUsername] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("summerx_username")) {
      setUsername(localStorage.getItem("summerx_username"));
    }
  }, []);
  // Check Username
  function checkUsername(e) {
    e.preventDefault();
    if (username.length !== 0) {
      if (username.replace(/ /g, "") !== 0) {
        localStorage.setItem("summerx_username", username);
        checkLocationPermission();
      } else {
        alert("Invalid Username");
      }
    } else alert("Invalid Username");
  }
  // Get Location Permission
  function checkLocationPermission() {
    if (localStorage.getItem("summerx_locationPermission") === "true") {
      router.push("/");
    } else {
      alert("We need Location Permission to work, Please allow us");
      navigator.geolocation.getCurrentPosition(() => {
        localStorage.setItem("summerx_locationPermission", true);
        router.push("/");
      });
    }
  }
  return (
    <div className="flex flex-col md:flex-row mt-8 lg:mt-12 xl:mt-24 justify-center dark:text-zinc-200 text-primary">
      <div className="basis-6/12 flex flex-col gap-4 lg:gap-3 xl:gap-8 sm:pl-3 lg:pl-6 py-8 sm:py-10">
        <div>
          <p className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-normal opacity-70 mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6">
            We are on a Mission
          </p>
          <p className="text-5xl sm:text-7xl md:text-6xl lg:text-7xl xl:text-8xl font-bold capitalize">
            To Save lives
          </p>
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
          <p className="mb-6 md:-mt-2 sm:w-11/12 md:w-10/12 xl:text-xl">
            of people who suffer from weather changes such as heat waves, excessive heat, global warming, and more by providing realtime alerts, location based nearby services, useful reminders, and more that will help them to tackle this issue.
          </p>
          <form action="" onSubmit={checkUsername} className="flex flex-col">
            <input
              type="text"
              id=""
              required={true}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your full name"
              autoFocus={true}
              className="w-full sm:w-10/12 h-16 lg:h-20 rounded-lg bg-primary focus:ring-primary/30 dark:bg-secondary ring-8 ring-primary/20 dark:ring-secondary/20 dark:focus:ring-secondary/30 text-secondary dark:text-primary outline-none p-4 text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider transition-all ease-in-out"
            />
            <button
              className="bg-primary dark:bg-secondary hover:ring-primary/30 ring-8 ring-primary/20 dark:ring-secondary/20 dark:hover:ring-secondary/30 text-secondary dark:text-primary outline-none p-4 text-base md:text-xl lg:text-2xl w-max px-8 my-8 rounded-full transition-all ease-in-out active:scale-95 self-center sm:self-start"
              type="submit"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
      <div className="basis-5/12 text-center p-4 w-[80%] lg:w-[90%] mt-0 mx-auto animate-bouncy ">
        <img src="/hero.svg" alt="" className="hidden dark:block" />
        <img src="/hero_dark.svg" alt="" className="block dark:hidden" />
      </div>
    </div>
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import { TrendingDownIcon, TrendingUpIcon } from "@heroicons/react/outline";

export default function Temperature() {
  const [temp, setTemp] = useState(0);
  const [feelLike, setFeelLike] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [tmax, setTmax] = useState(0);
  const [tmin, setTmin] = useState(0);
  const [wcode, setWcode] = useState(0);
  useEffect(() => {
    // Checking if geolocation is available
    if ("geolocation" in navigator) {
      // get coordinates
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        localStorage.setItem("summerx_lat", lat);
        localStorage.setItem("summerx_long", long);
        localStorage.setItem("summerx_locationPermission", true);
        // after getting coordinates, we will use API to get weather info
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=${process.env.NEXT_PUBLIC_apiKey}`
          )
          .then((res) => {
            // Assigning data
            const base = res.data.list[0].main;
            setTemp(parseInt(base.temp));
            setFeelLike(parseInt(base.feels_like));
            setHumidity(parseInt(base.humidity));
            setTmax(parseInt(base.temp_max));
            setTmin(parseInt(base.temp_min));
            setWcode(
              res.data.list[0].weather[0].icon.replace("n", "").replace("d", "")
            );
          });
      });
    } else {
      alert("Unable to get Location permission");
    }
  }, []);
  return (
    <div className="w-full sm:w-11/12 mt-4 h-28 ring-8 ring-primary/20 dark:ring-secondary/20 bg-primary dark:bg-secondary rounded-xl dark:text-primary text-secondary p-4 sm:p-8 flex items-center relative justify-between">
      {/* Stats */}
      <p className="text-4xl sm:text-5xl md:text-5xl lg:text-4xl xl:text-6xl font-semibold">
        {temp}°C
      </p>
      <p className="ml-3 sm:ml-4 sm:mr-2 text-xs sm:text-xl md:text-xl lg:text-base xl:text-xl opacity-70">
        Feels Like {feelLike}°C
      </p>
      {/* Min and Max Temp for the day */}
      <div className="flex flex-col space-y-2">
        <p
          className="flex justify-center items-center font-semibold text-sm sm:text-xl md:text-xl lg:text-base xl:text-xl"
          title="Minimum Temperature"
        >
          <TrendingUpIcon className="w-5 sm:w-7 xl:w-8 mr-2 stroke-[1.6]" />
          {tmax}°C
        </p>
        <p
          className="flex justify-center items-center font-semibold text-sm sm:text-xl md:text-xl lg:text-base xl:text-xl"
          title="Maximum Temperature"
        >
          <TrendingDownIcon className="w-5 sm:w-7 xl:w-8 mr-2 stroke-[1.6]" />
          {tmin}°C
        </p>
      </div>
      {/* Humidity level */}
      <p
        className="flex text-sm sm:text-xl md:text-xl lg:text-base xl:text-xl font-semibold"
        title="Humidity"
      >
        {MOISTURE_SVG}
        {humidity}
      </p>
      {/* Weather icon */}
      <div className="scale-125 sm:scale-100">
        <img
          src={`https://openweathermap.org/img/wn/${wcode}d@4x.png`}
          alt=""
          className="w-28 dark:hidden pointer-events-none select-none"
          draggable={false}
        />
        <img
          src={`https://openweathermap.org/img/wn/${wcode}n@4x.png`}
          alt=""
          className="w-28 hidden dark:block pointer-events-none select-none"
          draggable={false}
        />
      </div>
    </div>
  );
}

const MOISTURE_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="w-4 sm:w-6 ml-4 mr-2"
    viewBox="0 0 16 16"
  >
    <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z" />
  </svg>
);

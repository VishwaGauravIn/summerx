import axios from "axios";
import React from "react";

export default function Temperature() {
  axios
    .get(
      "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={VGIN}"
    )
    .then((res) => {
      console.log(res);
    });
  return (
    <div className="w-10/12 mt-4 h-28 ring-8 ring-primary/20 dark:ring-secondary/20 bg-primary dark:bg-secondary rounded-xl dark:text-primary text-secondary p-8 flex items-center">
      <p className="text-6xl font-semibold">38°C</p>
    </div>
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Temperature() {
  const [temp, setTemp] = useState(0);
  const [feelLike, setFeelLike] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [tmax, setTmax] = useState(0);
  const [tmin, setTmin] = useState(0);
  useEffect(() => {
    // Checking if geolocation is available
    if ("geolocation" in navigator) {
      // get coordinates
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
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
          });
      });
    } else {
      alert("Unable to get Location permission");
    }
  }, []);
  return (
    <div className="w-10/12 mt-4 h-28 ring-8 ring-primary/20 dark:ring-secondary/20 bg-primary dark:bg-secondary rounded-xl dark:text-primary text-secondary p-8 flex items-center">
      <p className="text-6xl font-semibold">{temp}°C</p>
    </div>
  );
}

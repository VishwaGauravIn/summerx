import axios from 'axios';
import React from 'react'

export default function Temperature() {
  axios
    .get(
      'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={VGIN}'
    )
    .then((res) => {
      console.log(res)
    });
  return (
    <div>Temperature</div>
  )
}

import React, { useEffect, useState } from "react";
import { MusicNoteIcon, BellIcon, SparklesIcon } from "@heroicons/react/solid";
import Widget from "./Widget";
import axios from "axios";
import AlertBox from "../../alert/AlertBox";

export default function Widgets() {
  const [walert, setWAlert] = useState([]);
  const [isWAlertVisible, setIsWAlertVisible] = useState(false);
  const [mood, setMood] = useState("pop");
  function find(x) {
    window.open(
      `https://www.google.com/maps/search/${x}/@${localStorage.getItem(
        "summerx_lat"
      )},${localStorage.getItem("summerx_long")}`,
      "_blank"
    );
  }
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${localStorage.getItem(
          "summerx_lat"
        )}&lon=${localStorage.getItem(
          "summerx_long"
        )}&exclude=hourly,daily,minutely&appid=${
          process.env.NEXT_PUBLIC_apiKey
        }`
      )
      .then((r) => {
        console.log(r);
        setMood(r.data.current.weather[0].main);
        if (r.data.alerts) {
          setWAlert(r.data.alerts[0]);
        } else {
          setWAlert(null);
        }
      });
  }, []);
  function showAlerts() {
    if (walert !== null) {
      setIsWAlertVisible(true);
    } else {
      alert("No Alerts for your area! Enjoy your Day.");
    }
  }
  return (
    <div className="w-full flex flex-row flex-wrap pt-16 sm:px-4 justify-center">
      <Widget icon={Bell} label="Alerts" onClick={showAlerts} />
      <Widget
        icon={Water}
        label="Water Reminder"
        onClick={() => {
          alert("Development in progress");
        }}
      />
      <Widget
        icon={Tree}
        label="Plant a Tree"
        onClick={() => {
          window.open("https://teamtrees.org/", "_blank");
        }}
      />
      <Widget
        icon={Music}
        label="Music"
        onClick={() => {
          if (!localStorage.getItem("summerx_music_alert")) {
            alert("Music feature is under testing");
            localStorage.setItem("summerx_music_alert", "shown");
          }
          window.open(
            `https://open.spotify.com/search/${mood} mood/playlists`,
            "_blank"
          );
        }}
      />
      <Widget icon={Hotels} label="Hotels" onClick={() => find("Hotels")} />
      <Widget
        icon={Doctor}
        label="Hospitals"
        onClick={() => find("Hospitals")}
      />
      <Widget
        icon={Sparkles}
        label="Attractions"
        onClick={() => find("Attractions")}
      />
      <Widget
        icon={Restaurants}
        label="Restaurants"
        onClick={() => find("Restaurants")}
      />
      {isWAlertVisible && (
        <AlertBox
          onClose={() => {
            setIsWAlertVisible(false);
          }}
          topic={walert.event}
          sender={walert.sender_name}
          desc={walert.description}
        />
      )}
    </div>
  );
}

//  SVGs
const iconClass =
  "w-6/12 group-hover:scale-90 duration-300 transition-transform ease-in-out";
const iconClassBS =
  "w-5/12 group-hover:scale-90 duration-300 transition-transform ease-in-out";
const BSbase = (d) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={iconClassBS}
      viewBox="0 0 16 16"
    >
      <path d={d} />
    </svg>
  );
};
// We need to metion classes atlest once in order to let tailwind add these classes dueing compilation process
const Music = (
  <MusicNoteIcon className="w-6/12 group-hover:scale-90 duration-300 transition-transform ease-in-out" />
);
const Bell = <BellIcon className={iconClass} />;
const Water = BSbase(
  "M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"
);
const Doctor = BSbase(
  "M6 0a1 1 0 0 0-1 1v1a1 1 0 0 0-1 1v4H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h6v-2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V16h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-3V3a1 1 0 0 0-1-1V1a1 1 0 0 0-1-1H6Zm2.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1ZM2.25 9h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 9.75v-.5A.25.25 0 0 1 2.25 9Zm0 2h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5ZM13.25 9h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25Z"
);
const Sparkles = <SparklesIcon className={iconClass} />;
const Restaurants = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={iconClass}
    viewBox="0 0 512 512"
  >
    <path d="M384,352H184.36l-41,35-41-35H16v24c0,30.59,21.13,55.51,47.26,56,2.43,15.12,8.31,28.78,17.16,39.47C93.51,487.28,112.54,496,134,496H266c21.46,0,40.49-8.72,53.58-24.55,8.85-10.69,14.73-24.35,17.16-39.47,13.88-.25,26.35-7.4,35-18.63A61.26,61.26,0,0,0,384,376Z" />
    <path d="M105,320h0l38.33,28.19L182,320H384v-8a40.07,40.07,0,0,0-32-39.2c-.82-29.69-13-54.54-35.51-72C295.67,184.56,267.85,176,236,176H164c-68.22,0-114.43,38.77-116,96.8A40.07,40.07,0,0,0,16,312v8h89Z" />
    <path d="M463.08,96H388.49l8.92-35.66L442,45,432,16,370,36,355.51,96H208v32h18.75l1.86,16H236c39,0,73.66,10.9,100.12,31.52A121.9,121.9,0,0,1,371,218.07a124.16,124.16,0,0,1,10.73,32.65,72,72,0,0,1,27.89,90.9A96,96,0,0,1,416,376c0,22.34-7.6,43.63-21.4,59.95a80,80,0,0,1-31.83,22.95,109.21,109.21,0,0,1-18.53,33c-1.18,1.42-2.39,2.81-3.63,4.15H416c16,0,23-8,25-23l36.4-345H496V96Z" />
  </svg>
);
const Hotels = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={iconClass}
    fill="currentColor"
  >
    <g>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M22 11v9h-2v-3H4v3H2V4h2v10h8V7h6a4 4 0 0 1 4 4zM8 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </g>
  </svg>
);
const Tree = BSbase(
  "M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5z"
);

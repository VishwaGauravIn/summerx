import React from "react";
import {
  InformationCircleIcon,
  MusicNoteIcon,
  FireIcon,
  BellIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
import Widget from "./Widget";

export default function Widgets() {
  return (
    <div className="w-full flex flex-row flex-wrap pt-16 px-4 justify-center">
      <Widget icon={Music} label="Music" />
      <Widget icon={Fire} label="Heat Waves" />
      <Widget icon={Info} label="Info" />
      <Widget icon={Water} label="Water Reminder" />
      <Widget icon={Bell} label="Alerts" />
      <Widget icon={Doctor} label="Doctor" />
      <Widget icon={Shop} label="Shop" />
      <Widget icon={Shop} label="Shop" />
    </div>
  );
}

//  SVGs
const iconClass =
  "w-6/12 group-hover:scale-90 duration-300 transition-transform ease-in-out";
const iconClassBS =
  "w-5/12 group-hover:scale-90 duration-300 transition-transform ease-in-out";
// We need to metion classes atlest once in order to let tailwind add these classes dueing compilation process
const Music = (
  <MusicNoteIcon className="w-6/12 group-hover:scale-90 duration-300 transition-transform ease-in-out" />
);
const Fire = <FireIcon className={iconClass} />;
const Info = <InformationCircleIcon className={iconClass} />;
const Bell = <BellIcon className={iconClass} />;
const Water = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={iconClassBS}
    viewBox="0 0 16 16"
  >
    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
  </svg>
);
const Doctor = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={iconClassBS}
    viewBox="0 0 16 16"
  >
    <path d="M6 0a1 1 0 0 0-1 1v1a1 1 0 0 0-1 1v4H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h6v-2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V16h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-3V3a1 1 0 0 0-1-1V1a1 1 0 0 0-1-1H6Zm2.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1ZM2.25 9h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 9.75v-.5A.25.25 0 0 1 2.25 9Zm0 2h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5ZM13.25 9h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25Z" />
  </svg>
);
const Shop = <ShoppingCartIcon className={iconClass} />;

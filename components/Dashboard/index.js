import React from "react";
import Greeting from "./greetings/Greeting";
import Temperature from "./temperature";
import Tips from "./tips";
import Widgets from "./widgets";

export default function Dashboard() {
  return (
    <div className="md:p-16">
      <Greeting />
      <div className="flex flex-row flex-wrap p-4">
        <Widgets />
        <Temperature />
      </div>
      <div className="">
        <Tips />
      </div>
    </div>
  );
}

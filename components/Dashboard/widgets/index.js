import React from "react";
import { MusicNoteIcon } from "@heroicons/react/solid";
import Widget from "./Widget";

export default function Widgets() {
  const Music = (<MusicNoteIcon className="w-6/12"/>)
  return (
    <div className="h-96 w-8/12 flex flex-row flex-wrap p-4">
      <Widget icon={Music} label="Music"/>
      <Widget icon={Music} label="Music"/>
      <Widget icon={Music} label="Music"/>
      <Widget icon={Music} label="Music"/>
      <Widget icon={Music} label="Music"/>
      <Widget icon={Music} label="Music"/>
      <Widget icon={Music} label="Music"/>
    </div>
  );
}

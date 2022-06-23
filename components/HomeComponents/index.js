import React from "react";
import Features from "../Header/features";
import GlobalStats from "../Header/globalStats";
import Hero from "../Header/hero";

export default function HomeComponents() {
  return (
    <div>
      <Hero />
      <GlobalStats />
      <Features />
    </div>
  );
}

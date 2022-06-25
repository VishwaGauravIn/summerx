import React from "react";
import Hero from "./hero";
import Features from "./features";
import GlobalStats from "./globalStats";
import Footer from "../Footer";
import OpenSource from "./openSource";
export default function HomeComponents() {
  return (
    <>
      <Hero />
      <GlobalStats />
      <Features />
      <OpenSource />
      <Footer />
    </>
  );
}

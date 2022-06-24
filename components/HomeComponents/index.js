import React from "react";
import Hero from "./hero";
import Features from "./features";
import GlobalStats from "./globalStats";
import Footer from "../Footer";
export default function HomeComponents() {
  return (
    <>
      <Hero />
      <GlobalStats />
      <Features />
      <Footer/>
    </>
  );
}

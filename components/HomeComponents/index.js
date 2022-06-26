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
      {/* Video Embed */}
      <div className="flex justify-center items-center">
        <iframe
          src="https://www.youtube.com/embed/-EtZ2w1qLxE"
          title="YouTube video player"
          className="w-11/12 sm:w-10/12 md:w-8/12 xl:w-6/12 aspect-[560/315] rounded-xl overflow-hidden"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <OpenSource />
      <Footer />
    </>
  );
}

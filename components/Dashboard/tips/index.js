import React, { useEffect, useState } from "react";

import TextTransition, { presets } from "react-text-transition";

export default function Tips() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(Math.floor(Math.random() * 22));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="cursive uppercase flex justify-center max-w-full text-xl text-center mt-6">
      <TextTransition springConfig={presets.molasses}>
        {tipsList[index]}
      </TextTransition>
    </div>
  );
}

export const tipsList = [
  "Drink at least 2-3 L everyday",
  "Wear light and loose fit clothes",
  "Avoid eating oily foods",
  "Use box fans and ceiling fans to promote air circulation throughout your home",
  "Avoid alcoholic beverages and caffeine",
  "Try to visit public buildings with air conditioning",
  "Remember that pets also suffer when the temperature rises",
  "If you go outdoors protect yourself from the sun by wearing a wide-brimmed hat, sunglasses, and by putting on sunscreen",
  "Cover windows with drapes or shades",
  "Prevent your skin from getting damaged by the Sun, use a good sunscreame",
  "Take good care of plants and trees around you",
  "Carry a bootle of water with you while heading out",
  "Stay hydrated by drinking glucose water, lemon based drinks",
  "Add onions to your salads",
  "Use Talc powder to avoid rashes",
  "Apply aloe vera on your skin to avoid sunburn",
  "Gargles of guava leaves and eculuputus leaves cures throat pain",
  "Use umbrella while going out",
  "Take shower two times during a day",
  "Visit the doctor if you feel sick",
  "Avoid peak sun hours",
  "You can use caps to cover your head while going outside",
];

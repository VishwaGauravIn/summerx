import React from "react";
import TextTransition, { presets } from "react-text-transition";

export const AnimateText = ({ texts }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1800);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <TextTransition springConfig={presets.stiff} className="max-w-full">
        {texts[index % texts.length]}
      </TextTransition>
    </>
  );
};

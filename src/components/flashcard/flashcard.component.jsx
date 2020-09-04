import React, { useState, useEffect, useRef } from "react";

import "./flashcard.styles.scss";

const Flashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState("initial");
  const frontRef = useRef();
  const backRef = useRef();

  const setMaxHeight = () => {
    const frontHeight = frontRef.current.getBoundingClientRect().height;
    setHeight(Math.max(frontHeight, 100));
  };

  useEffect(setMaxHeight, [
    flashcard.question,
    flashcard.answer,
    flashcard.options,
  ]);
  useEffect(() => {
    window.addEventListener("resize", setMaxHeight);
    return () => window.removeEventListener("resize", setMaxHeight);
  }, []);
  return (
    <div
      className={`card ${flip ? "flip" : ""} `}
      style={{ height: height }}
      onClick={() => setFlip(!flip)}
    >
      <div className="front" ref={frontRef}>
        {flashcard.question}
        <div className="flashcard-options">
          {flashcard.options.map((option, index) => {
            return (
              <div className="flashcard-option" key={index}>
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="back" ref={backRef}>
        {flashcard.answer}
      </div>
    </div>
  );
};

export default Flashcard;

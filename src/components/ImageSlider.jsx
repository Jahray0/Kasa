import React, { useState } from "react";
import "../styles/components/imageSlider.css";

// Affichage du slider des pages logement
export default function ImageSlider({ slides }) {
  const [currentPosition, setCurrentPosition] = useState(0);

  const goToPrevious = () => {
    setCurrentPosition(
      currentPosition === 0 ? slides.length - 1 : currentPosition - 1
    );
  };

  const goToNext = () => {
    setCurrentPosition(
      currentPosition === slides.length - 1 ? 0 : currentPosition + 1
    );
  };

  if (slides.length > 1) {
    return (
      <div className="imageSlider">
        <img
          className="slide"
          src={slides[currentPosition]}
          alt={slides.description}
        />
        <div className="leftArrow" onClick={goToPrevious}></div>
        <div className="rightArrow" onClick={goToNext}></div>
        <p className="rollingNumber">
          {currentPosition + 1}/{slides.length}{" "}
        </p>
      </div>
    );
  } else {
    return (
      <div className="imageSlider">
        <img
          className="slide"
          src={slides[currentPosition]}
          alt={slides.description}
        />
        <p className="rollingNumber">
          {currentPosition + 1}/{slides.length}{" "}
        </p>
      </div>
    );
  }
}

import React, { useState } from "react";
import "../styles/components/Carousel.css";

function Carousel({ images }) {
  //initialisation de l'état du carousel : image 1
  const [currentImage, setCurrentImage] = useState(0);
  //fonction qui permet de passer l'image suivante
  const imageSuivante = () => {
    //si on est sur la dernière image, on revient à la première
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };
  //fonction qui permet de passer l'image précédente
  const imagePrecedente = () => {
    //si on est sur la première image, on revient à la dernière
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  if (images.length === 1) {
    return (
      <div className="carousel">
        <img className="image" src={images[currentImage]} alt="carousel" />
      </div>
    );
  } else if (images.length > 0) {
    return (
      <div className="carousel">
        <img className="image" src={images[currentImage]} alt="carousel" />
        <div className="carousel__controle">
          <div className="chevronLeft" onClick={imagePrecedente}></div>
          <div className="chevronRight" onClick={imageSuivante}></div>
        </div>
        <p className="imageActuelle">
          {currentImage + 1}/{images.length}
        </p>
      </div>
    );
  }
}

export default Carousel;

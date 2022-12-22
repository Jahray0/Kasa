import React from "react";
import "../styles/components/Carousel.css";

function Carousel({ images }) {
  const [currentImage, setCurrentImage] = React.useState(0);

  const imagePrecedente = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const imageSuivante = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  if (images.length === 1) {
    return (
      <div className="carousel">
        <img className="image" src={images[currentImage]} alt="carousel" />
      </div>
    ); /*probleme de mise en page ! */
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

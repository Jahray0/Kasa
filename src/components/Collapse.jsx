import React, { useState } from "react";
import "../styles/components/Collapse.css";
import chevronDown2 from "../assets/chevronDown2.svg";
import chevronUp2 from "../assets/chevronUp2.svg";

// Affichage des collapse des pages logement et à propos
function Collapse(props) {
  //initailisation de l'état du collapse : fermé
  const [isOpen, setIsOpen] = useState(false);

  //fonction qui permet de changer l'état du collapse
  function toggle() {
    //si le collapse est ouvert, on le ferme
    setIsOpen(!isOpen);
  }

  return (
    <div className="collapse__container">
      <div className="collapse__title" onClick={toggle}>
        <h2>{props.title}</h2>

        {isOpen ? (
          //si le collapse est ouvert, on affiche la flèche vers le haut
          <img src={chevronUp2} alt="upArrow" />
        ) : (
          //sinon on affiche la flèche vers le bas
          <img src={chevronDown2} alt="chevronDown" />
        )}
      </div>
      {isOpen ? (
        //si le collapse est ouvert, on affiche la description
        <div className="collapse__description">{props.description}</div>
      ) : (
        //sinon on affiche rien
        ""
      )}
    </div>
  );
}

export default Collapse;

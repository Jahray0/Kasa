import React, { useState } from "react";
import "../styles/components/Collapse.css";
import chevronDown from "../assets/chevronDown.svg";
import chevronUp from "../assets/chevronUp.svg";

// Affichage des collapse des pages logement et à propos
export default function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="collapseContainer">
      <div className="collapseTitle" onClick={toggle}>
        <h2>{props.title}</h2>
        {isOpen ? (
          <img src={chevronUp} alt="upArrow" />
        ) : (
          <img src={chevronDown} alt="chevronDown" />
        )}
      </div>
      {isOpen ? (
        <div className="collapseDescription">{props.description}</div>
      ) : (
        ""
      )}
    </div>
  );
}

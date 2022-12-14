import React, { useState, useRef } from "react";
import "../styles/components/Acordeon.css";
import Chevron from "./Chevron";

function Acordeon(props) {
  const [setActive, SetActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, SetRotateState] = useState("acordeon__icon");

  const content = useRef(null);

  function toggleAcordeon() {
    SetActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    SetRotateState(
      SetActiveState === "active" ? "acordeon__icon" : "acordeon__icon rotate"
    );
    console.log(content.current.scrollHeight);
  }

  return (
    <div className="acordeon__section">
      <button className={`acordeon ${setActive}`} onClick={toggleAcordeon}>
        <h2 className="acordeon__title">{props.title}</h2>
        <Chevron className={`${setRotate}`} width={10} fill={"#fff"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="acordeon__content"
      >
        <div className="acordeon__text">{props.content}</div>
      </div>
    </div>
  );
}

export default Acordeon;

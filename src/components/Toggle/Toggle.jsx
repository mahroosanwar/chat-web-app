import React from "react";
import "./Toggle.scss";
import { UilSun } from "@iconscout/react-unicons";
import { UilMoon } from "@iconscout/react-unicons";

const Toggle = ( props ) => {

  return (
    <div className="toggle" onClick={props.onClick}>
      <UilMoon />
      <UilSun />
      <div
        className="t-button"
        style={props.colorMode === "light" ? { right: "2px" } : { left: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;

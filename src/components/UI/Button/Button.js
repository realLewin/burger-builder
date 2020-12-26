import React from "react";
import classes from "./Button.module.css";
import clasees from "./Button.module.css";

const button = (props) => {
  return (
    <button
      className={[clasees.Button, classes[props.btnType]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default button;

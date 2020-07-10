import React from "react";
import classes from "./BuildControl.module.css";
const buildControl = (porps) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{porps.label}</div>
    <button
      className={classes.Less}
      onClick={porps.removed}
      disabled={porps.disabled}
    >
      Less
    </button>
    <button className={classes.More} onClick={porps.added}>
      More
    </button>
  </div>
);

export default buildControl;

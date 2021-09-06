import React from "react";
import useStyles from "./styles";

function Cards() {
  const classes = useStyles();
  return (
    <div className={classes.cardItems}>
      <div className={classes.cardImg}></div>
      <div className={classes.cardInfo}>
        <div className={classes.cardInfoImg}></div>
        <div className={classes.cardInfoTitle}></div>
      </div>
    </div>
  );
}

export default Cards;

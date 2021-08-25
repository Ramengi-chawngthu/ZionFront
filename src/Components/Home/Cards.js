import React from "react";
import useStyles from "./styles";

function Cards() {
  const classes = useStyles();
  return (
    <div className={classes.cardItems}>
      <div className={classes.cardImg}>
        <img
          src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg"
          style={{
            width: "100%",
            objectFit: "contain",
            objectPosition: "50% 50%",
          }}
          alt="Hello"
        />
      </div>
      <div className={classes.cardInfo}>
        <div className={classes.cardInfoImg}></div>
        <div className={classes.cardInfoTitle}></div>
      </div>
    </div>
  );
}

export default Cards;

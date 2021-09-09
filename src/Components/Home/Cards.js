import React from "react";
import useStyles from "./styles";
import BookmarkCardSvg from "../../Svg/HomeSvg/BookmarkCardSvg";

function Cards() {
  const classes = useStyles();
  return (
    <div className={classes.cardItem}>
      <div className={classes.cardImg}></div>
      <div className={classes.cardInfo}>
        <div className={classes.cardInfoTitle}>
          <h1>Mega Matcha</h1>
          <p>Cereminial Grade</p>
        </div>
        <div className={classes.cardInfoBookmark}>
          <BookmarkCardSvg />
        </div>
      </div>
    </div>
  );
}

export default Cards;

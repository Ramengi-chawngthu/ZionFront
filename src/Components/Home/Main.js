import React from "react";
import useStyles from "./styles";
import Filter from "../../Svg/HomeSvg/FilterSvg";

function Main() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <header className={classes.header}>
        <h1>All Categories</h1>
        <button className={classes.headerButton}>
          <h1>Filter</h1>
          <Filter />
        </button>
      </header>

      <div className={classes.gridMain}>
        <div className={classes.cardItems}>
          <div className={classes.cardImg}></div>
          <div className={classes.cardInfo}>
            <div className={classes.cardInfoImg}></div>
            <div className={classes.cardInfoTitle}></div>
          </div>
        </div>

        <div className={classes.cardItems}>
          <div className={classes.cardImg}></div>
          <div className={classes.cardInfo}>
            <div className={classes.cardInfoImg}></div>
            <div className={classes.cardInfoTitle}></div>
          </div>
        </div>

        <div className={classes.cardItems}>
          <div className={classes.cardImg}></div>
          <div className={classes.cardInfo}>
            <div className={classes.cardInfoImg}></div>
            <div className={classes.cardInfoTitle}></div>
          </div>
        </div>

        <div className={classes.cardItems}>
          <div className={classes.cardImg}></div>
          <div className={classes.cardInfo}>
            <div className={classes.cardInfoImg}></div>
            <div className={classes.cardInfoTitle}></div>
          </div>
        </div>

        <div className={classes.cardItems}>
          <div className={classes.cardImg}></div>
          <div className={classes.cardInfo}>
            <div className={classes.cardInfoImg}></div>
            <div className={classes.cardInfoTitle}></div>
          </div>
        </div>

        <div className={classes.cardItems}>
          <div className={classes.cardImg}></div>
          <div className={classes.cardInfo}>
            <div className={classes.cardInfoImg}></div>
            <div className={classes.cardInfoTitle}></div>
          </div>
        </div>

        <div className={classes.cardItems}>
          <div className={classes.cardImg}></div>
          <div className={classes.cardInfo}>
            <div className={classes.cardInfoImg}></div>
            <div className={classes.cardInfoTitle}></div>
          </div>
        </div>

        <div className={classes.cardItems}>
          <div className={classes.cardImg}></div>
          <div className={classes.cardInfo}>
            <div className={classes.cardInfoImg}></div>
            <div className={classes.cardInfoTitle}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

import React from "react";
import useStyles from "./styles";
import Filter from "../../Svg/HomeSvg/FilterSvg";
import Grid from "@material-ui/core/Grid";

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

      <Grid
        container={true}
        spacing={2}
        justifyContent="center"
        className={classes.gridMain}
      >
        <Grid item lg={4} md={6} sm={12} className={classes.cardItems}>
          <div className={classes.cardImg}></div>
          <div className={classes.cardInfo}>
            <div className={classes.cardInfoImg}></div>
            <div className={classes.cardInfoTitle}></div>
          </div>
        </Grid>

        <Grid
          item
          lg={4}
          md={6}
          sm={12}
          justifyContent="center"
          className={classes.cardItems}
        >
          <div className={classes.cardImg}></div>
          <div className={classes.cardInfo}>
            <div className={classes.cardInfoImg}></div>
            <div className={classes.cardInfoTitle}></div>
          </div>
        </Grid>

        <Grid
          item
          lg={4}
          md={6}
          sm={12}
          justifyContent="center"
          className={classes.cardItems}
        >
          <div className={classes.cardImg}></div>
          <div className={classes.cardInfo}>
            <div className={classes.cardInfoImg}></div>
            <div className={classes.cardInfoTitle}></div>
          </div>
        </Grid>

        <Grid
          item
          lg={4}
          md={6}
          sm={12}
          justifyContent="center"
          className={classes.cardItems}
        >
          <div className={classes.cardImg}></div>
          <div className={classes.cardInfo}>
            <div className={classes.cardInfoImg}></div>
            <div className={classes.cardInfoTitle}></div>
          </div>
        </Grid>

        <Grid
          item
          lg={4}
          md={6}
          sm={12}
          justifyContent="center"
          className={classes.cardItems}
        >
          <div className={classes.cardImg}></div>
          <div className={classes.cardInfo}>
            <div className={classes.cardInfoImg}></div>
            <div className={classes.cardInfoTitle}></div>
          </div>
        </Grid>

        <Grid
          item
          lg={4}
          md={6}
          sm={12}
          justifyContent="center"
          className={classes.cardItems}
        >
          <div className={classes.cardImg}></div>
          <div className={classes.cardInfo}>
            <div className={classes.cardInfoImg}></div>
            <div className={classes.cardInfoTitle}></div>
          </div>
        </Grid>

        <Grid item lg={4} md={6} sm={12} className={classes.cardItems}>
          <div className={classes.cardImg}></div>
          <div className={classes.cardInfo}>
            <div className={classes.cardInfoImg}></div>
            <div className={classes.cardInfoTitle}></div>
          </div>
        </Grid>

        <Grid item lg={4} md={6} sm={12} className={classes.cardItems}>
          <div className={classes.cardImg}></div>
          <div className={classes.cardInfo}>
            <div className={classes.cardInfoImg}></div>
            <div className={classes.cardInfoTitle}></div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;

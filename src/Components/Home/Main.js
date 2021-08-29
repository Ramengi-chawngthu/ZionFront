import React, { useState, useEffect } from "react";
import useStyles from "./styles";

import Burger from "./Burger";
import Cards from "./Cards";
import Filter from "../../Svg/HomeSvg/FilterSvg";
import MessageSvg from "../../Svg/HomeSvg/MessageSvg";
import NotificationsSvg from "../../Svg/HomeSvg/NotificationsSvg";

function Main() {
  const [toggleSidebar, SettoggleSidebar] = useState(false);
  useEffect(() => {
    console.log(toggleSidebar);
  }, [toggleSidebar]);
  const classes = useStyles();
  return (
    <>
      <div className={classes.main}>
        {toggleSidebar && (
          <div style={{ height: "100vh", width: "100vw" }}>
            <div
              onClick={() => {
                SettoggleSidebar((val) => !val);
              }}
            >
              <Burger />
            </div>

            <p>To be implemented later</p>
          </div>
        )}
        <header className={classes.header}>
          <div className={classes.mainNavbar}>
            <div className={classes.mainNavbarContainer}>
              <div
                className={classes.mainNavbarBurger}
                onClick={() => {
                  SettoggleSidebar((val) => !val);
                }}
              >
                <Burger />
              </div>
              <div className={classes.mainNavbarIcons}>
                <MessageSvg />
                <NotificationsSvg />
              </div>
            </div>
          </div>

          <h1>All Categories</h1>

          <button className={classes.headerButton}>
            <h1>Filter</h1>
            <Filter />
          </button>
        </header>

        <div className={classes.gridMain}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </>
  );
}

export default Main;

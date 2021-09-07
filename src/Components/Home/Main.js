import React, { useState, useEffect, useContext } from "react";
import useStyles from "./styles";
import SidebarContext from "../Context/SidebarContext";

import Cards from "./Cards";
import Filter from "../../Svg/HomeSvg/FilterSvg";
import HomeBurger from "./HomeBurger";

function Main() {
  const { isSidebar, setIsSidebar } = useContext(SidebarContext);
  const classes = useStyles();
  const HandleClick = () => {
    setIsSidebar(true);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 960;
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  if (width >= breakpoint) setIsSidebar(false);

  return (
    <>
      <div className={classes.main}>
        <div className={classes.navigation}>
          <HomeBurger click={HandleClick} />
          <h1>Zion</h1>
        </div>

        <header className={classes.header}>
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

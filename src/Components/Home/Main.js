import React, { useState, useEffect, useContext } from 'react';
import useStyles from './styles';
import SidebarContext from '../Context/SidebarContext';

import Burger from './Burger';
import Cards from './Cards';
import Filter from '../../Svg/HomeSvg/FilterSvg';
import HomeBurger from './HomeBurger';

function Main() {
  const { isSidebar, setIsSidebar } = useContext(SidebarContext);
  const classes = useStyles();
  const HandleClick = () => {
    setIsSidebar(true);
  };
  console.log(isSidebar);

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

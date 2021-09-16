import React, { useContext } from 'react';
import Filter from '../../Svg/HomeSvg/FilterSvg';
import SidebarContext from '../Context/SidebarContext';
import Cards from './Cards';
import HomeBurger from './HomeBurger';
import useStyles from './styles';

function Main() {
  const { setIsSidebar } = useContext(SidebarContext);
  const classes = useStyles();
  const HandleClick = () => {
    setIsSidebar(true);
  };

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

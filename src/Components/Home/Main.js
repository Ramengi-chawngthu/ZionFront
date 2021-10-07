import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import Filter from '../../Svg/HomeSvg/FilterSvg';
import SidebarContext from '../Context/SidebarContext';
import Cards from './Cards/Cards';
import HomeBurger from './HomeBurger';
import useStyles from './HomeStyles';
import Button from '@material-ui/core/Button';

function Main() {
  const { setIsSidebar } = useContext(SidebarContext);
  const classes = useStyles();
  const HandleClick = () => {
    setIsSidebar(true);
  };

  return (
    <>
      <Box className={classes.main}>
        <Box className={classes.navigation}>
          <HomeBurger click={HandleClick} />
          <h1>Zion</h1>
        </Box>

        <header className={classes.header}>
          <h1>All Categories</h1>
          <Button className={classes.headerButton}>
            <h1>Filter</h1>
            <Filter />
          </Button>
        </header>

        <Box className={classes.gridMain}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Box>
      </Box>
    </>
  );
}

export default Main;

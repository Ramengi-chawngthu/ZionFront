import Box from '@material-ui/core/Box';
import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Filter from '../../../Svg/HomeSvg/FilterSvg';
import SearchIconSvg from '../../../Svg/HomeSvg/SearchIconSvg';
import SidebarContext from '../../Context/SidebarContext';
import Cards from '../Cards/Cards';
import HomeBurger from '../HomeBurger';
import useStyles from './StoreStyles';
import gurl from '../../../Assets/girl(1).jpg';

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

        <Box className={classes.title}>
          <h1>Stores</h1>
        </Box>

        <Box className={classes.header}>
          <Box className={classes.searchBox}>
            <form className={classes.searchForm}>
              <input
                type="text"
                placeholder="Search Store"
                className={classes.searchInput}
              ></input>
              <button type="submit">
                <SearchIconSvg />
              </button>
            </form>
          </Box>

          <Box className={classes.filter}>
            <Button className={classes.headerButton}>
              <h1>Filter</h1>
              <Filter />
            </Button>
          </Box>
        </Box>

        <Box className={classes.gridMain}>
          <Cards
            image={
              'https://images.unsplash.com/photo-1554230505-919a13968970?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80'
            }
          />
          <Cards
            image={
              'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            }
          />
          <Cards image={gurl} />
          <Cards
            image={
              'https://images.unsplash.com/photo-1526265218618-bdbe4fdb5360?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGdpcmxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            }
          />
          <Cards
            image={
              'https://images.unsplash.com/photo-1556630820-200f321dce4a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGdpcmxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            }
          />
          <Cards
            image={
              'https://images.unsplash.com/photo-1555320818-21ebf0faf145?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=614&q=80'
            }
          />
        </Box>
      </Box>
    </>
  );
}

export default Main;

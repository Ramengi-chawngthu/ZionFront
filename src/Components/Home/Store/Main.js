import Box from '@material-ui/core/Box';
import React, { useContext } from 'react';
import Filter from '../../../Svg/HomeSvg/FilterSvg';
import SearchIconSvg from '../../../Svg/HomeSvg/SearchIconSvg';
import SidebarContext from '../../Context/SidebarContext';
import Cards from '../Cards';
import HomeBurger from '../HomeBurger';
import useStyles from './styles';

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

        <Box className={classes.banner}>
          <img
            src='https://images.unsplash.com/photo-1541703483865-8a7b251a58ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80'
            alt=''
          />
        </Box>

        <Box className={classes.header}>
          <Box className={classes.searchBox}>
            <form className={classes.searchForm}>
              <input
                type='text'
                placeholder='Search Store'
                className={classes.searchInput}></input>
              <button type='submit'>
                <SearchIconSvg />
              </button>
            </form>
          </Box>

          <Box className={classes.filter}>
            <button className={classes.headerButton}>
              <h1>Filter</h1>
              <Filter />
            </button>
          </Box>
        </Box>

        <Box className={classes.gridMain}>
          <Cards />
          <Cards
            image={
              'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            }
          />
          <Cards
            image={
              'https://images.unsplash.com/photo-1498746607408-1e56960e3bdd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
          />
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

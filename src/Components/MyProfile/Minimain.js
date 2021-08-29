import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import Cards from './Cards';

import Filter from '../../Svg/HomeSvg/FilterSvg';
import SearchIconSvg from '../../Svg/HomeSvg/SearchIconSvg';

function Minimain() {
  const classes = useStyles();
  return (
    <>
      <div>
        <header className={classes.header}>
          <div className={classes.navSearchBarDiv}>
            <form
              className={classes.navSearchBarForm}
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type='text'
                placeholder='Search name`s Products'
                className={classes.navSearchBar}
              ></input>
              <button type='submit'>
                <SearchIconSvg />
              </button>
            </form>
          </div>

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

export default Minimain;

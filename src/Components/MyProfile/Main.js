import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import Profile from './Profile';
// import Procard from './Procard';

function Main() {
  const [toggleSidebar, SettoggleSidebar] = useState(false);
  useEffect(() => {
    console.log(toggleSidebar);
  }, [toggleSidebar]);
  const classes = useStyles();
  return (
    <>
      <Profile />
      {/* <Procard />; */}
    </>
  );
}

export default Main;

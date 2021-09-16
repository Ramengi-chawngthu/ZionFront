import React, { useContext, useEffect } from 'react';

import sidebarOptionsContext from '../../Context/SidebarOptionsContext';
import Sidebar from '../Sidebar/Sidebar';
import Main from './Main';

function Store() {
  const { setSidebarOptions } = useContext(sidebarOptionsContext);

  useEffect(() => {
    setSidebarOptions(6);
  });

  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
}

export default Store;

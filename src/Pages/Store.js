import { useContext, useEffect } from 'react';
import Sidebar from '../Components/Home/Sidebar/Sidebar';
import Main from '../Components/Home/Store/Main';
import SidebarOptionsContext from '../Components/Context/SidebarOptionsContext';
import { useLocation } from 'react-router-dom';
function Store() {
  const location = useLocation();
  console.log(location);
  const { setSidebarOptions } = useContext(SidebarOptionsContext);
  useEffect(() => {
    setSidebarOptions(5);
  });

  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
}

export default Store;

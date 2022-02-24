import { useContext, useEffect } from 'react';
import Sidebar from '../Components/Home/Sidebar/Sidebar';
import Main from '../Components/Home/Main';
import SidebarOptionsContext from '../Components/Context/SidebarOptionsContext';

function Home() {
  const { setSidebarOptions } = useContext(SidebarOptionsContext);
  useEffect(() => {
    setSidebarOptions(1);
  });

  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
}

export default Home;

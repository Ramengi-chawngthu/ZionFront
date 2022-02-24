import Sidebar from '../Components/Home/Sidebar/Sidebar';
import Main from '../Components/Home/MyProfile/Main';
import SidebarOptionsContext from '../Components/Context/SidebarOptionsContext';
import { useContext, useEffect } from 'react';

export default function MyProfile() {
  const { setSidebarOptions } = useContext(SidebarOptionsContext);
  useEffect(() => {
    setSidebarOptions(2);
  });
  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
}

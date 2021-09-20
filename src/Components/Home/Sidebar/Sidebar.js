import React, { useState, useEffect, useContext } from 'react';
import useStyles from './styles';
import SimpleBarReact from 'simplebar-react';
import 'simplebar/src/simplebar.css';
import SidebarContext from '../../Context/SidebarContext';
import SidebarOptionsContext from '../../Context/SidebarOptionsContext';
import { useHistory } from 'react-router-dom';

import MessageSvg from '../../../Svg/HomeSvg/MessageSvg';
import NotificationsSvg from '../../../Svg/HomeSvg/NotificationsSvg';
import SearchIconSvg from '../../../Svg/HomeSvg/SearchIconSvg';
import MyProfileSvg from '../../../Svg/HomeSvg/MyProfileSvg';
import FollowingSvg from '../../../Svg/HomeSvg/FollowingSvg';
import FoloowersSvg from '../../../Svg/HomeSvg/FollowersSvg';
import BookmarksSvg from '../../../Svg/HomeSvg/BookmarksSvg';
import ClubsSvg from '../../../Svg/HomeSvg/ClubsSvg';
import StoresSvg from '../../../Svg/HomeSvg/StoresSvg';
import SettingsSvg from '../../../Svg/HomeSvg/SettingsSvg';
import LogoutSvg from '../../../Svg/HomeSvg/LogoutSvg';
import closeWindow from '../../../Assets/closeWindow.png';

function Sidebar() {
  let history = useHistory();
  const { isSidebar, setIsSidebar } = useContext(SidebarContext);
  const { sidebarOptions, setSidebarOptions } = useContext(
    SidebarOptionsContext
  );
  const clearContext = () => {
    setIsSidebar(false);
    setSidebarOptions(0);
  };
  const classes = useStyles();
  const style = {
    backgroundColor: 'rgba(15, 16, 236, 0.1)',
  };

  function handleOptionSelect(option) {
    setSidebarOptions(option);
  }

  const sidebar = isSidebar ? classes.sidebarActive : classes.sidebar;
  const handleClick = () => {
    setIsSidebar((val) => !val);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 960;
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  if (width >= breakpoint) setIsSidebar(false);

  return (
    <SimpleBarReact className={sidebar}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <div className={classes.burger}>
            <img src={closeWindow} alt='close' onClick={handleClick} />
          </div>
          <div className={classes.navIcons}>
            <MessageSvg />
            <NotificationsSvg />
          </div>
        </nav>

        <div className={classes.navSearchBarDiv}>
          <form
            className={classes.navSearchBarForm}
            onSubmit={(e) => {
              e.preventDefault();
            }}>
            <input
              type='text'
              placeholder='Search Products'
              className={classes.navSearchBar}></input>
            <button type='submit'>
              <SearchIconSvg />
            </button>
          </form>
        </div>

        <div className={classes.options1}>
          <ul>
            <li
              style={sidebarOptions === 1 ? style : null}
              onClick={() => {
                handleOptionSelect(1);
              }}>
              <MyProfileSvg />
              <span>My profile</span>
            </li>
            <li
              style={sidebarOptions === 2 ? style : null}
              onClick={() => {
                handleOptionSelect(2);
              }}>
              <FollowingSvg />
              <span>Following</span>
            </li>
            <li
              style={sidebarOptions === 3 ? style : null}
              onClick={() => {
                handleOptionSelect(3);
              }}>
              <FoloowersSvg />
              <span>Followers</span>
            </li>
            <li
              style={sidebarOptions === 4 ? style : null}
              onClick={() => {
                handleOptionSelect(4);
              }}>
              <BookmarksSvg />
              <span>Bookmarks</span>
            </li>
          </ul>
        </div>

        <div className={classes.options2}>
          <ul>
            <li
              style={sidebarOptions === 5 ? style : null}
              onClick={() => {
                handleOptionSelect(5);
              }}>
              <ClubsSvg />
              <span>Clubs</span>
            </li>
            <li
              style={sidebarOptions === 6 ? style : null}
              onClick={() => {
                handleOptionSelect(6);
                history.push('/home/store');
              }}>
              <StoresSvg />
              <span>Stores</span>
            </li>
          </ul>
        </div>

        <div className={classes.footerOptions}>
          <div>
            <SettingsSvg />
            <span>Settings</span>
          </div>
          <div
            onClick={() => {
              clearContext();
              history.push('/');
            }}>
            <LogoutSvg />
            <span className={classes.logout}>Logout</span>
          </div>
        </div>
      </div>
    </SimpleBarReact>
  );
}

export default Sidebar;

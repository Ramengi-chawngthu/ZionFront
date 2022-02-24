import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SimpleBarReact from 'simplebar-react';
import 'simplebar/src/simplebar.css';
import LogoutSvg from '../../../Svg/HomeSvg/LogoutSvg';
import MessageSvg from '../../../Svg/HomeSvg/MessageSvg';
import NotificationsSvg from '../../../Svg/HomeSvg/NotificationsSvg';
import SearchIconSvg from '../../../Svg/HomeSvg/SearchIconSvg';
import SettingsSvg from '../../../Svg/HomeSvg/SettingsSvg';
import SidebarContext from '../../Context/SidebarContext';
import SidebarOptionsContext from '../../Context/SidebarOptionsContext';
import useStyles from './SidebarStyles';

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
    backgroundColor: 'rgba(15, 16, 236, 0.1)'
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
            <i className="fas fa-arrow-left fa-2x" onClick={handleClick}></i>
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
            }}
          >
            <input
              type="text"
              placeholder="Search Products"
              className={classes.navSearchBar}
            ></input>
            <button type="submit">
              <SearchIconSvg />
            </button>
          </form>
        </div>

        <div className={classes.options1}>
          <ul>
            <li
              style={sidebarOptions === 1 ? style : null}
              onClick={() => {
                setIsSidebar(false);
                handleOptionSelect(1);
                history.push('/home');
              }}
            >
              <i className="fas fa-home"></i>
              <span>Home</span>
            </li>
            <li
              style={sidebarOptions === 2 ? style : null}
              onClick={() => {
                setIsSidebar(false);
                handleOptionSelect(2);
                history.push('/myprofile');
              }}
            >
              <i className="fas fa-user-circle"></i>
              <span>My profile</span>
            </li>
            <li
              style={sidebarOptions === 3 ? style : null}
              onClick={() => {
                setIsSidebar(false);
                handleOptionSelect(3);
              }}
            >
              <i className="fas fa-users"></i>
              <span>Following</span>
            </li>
            <li
              style={sidebarOptions === 4 ? style : null}
              onClick={() => {
                setIsSidebar(false);
                handleOptionSelect(4);
              }}
            >
              <i className="fas fa-running"></i>
              <span>Followers</span>
            </li>
          </ul>
        </div>

        <div className={classes.options2}>
          <ul>
            <li
              style={sidebarOptions === 5 ? style : null}
              onClick={() => {
                setIsSidebar(false);
                handleOptionSelect(5);
                history.push('/home/store');
              }}
            >
              <i className="fas fa-store"></i>
              <span>Stores</span>
            </li>
            <li
              style={sidebarOptions === 6 ? style : null}
              onClick={() => {
                setIsSidebar(false);
                handleOptionSelect(6);
                // history.push('/home/clubs');
              }}
            >
              <i className="fas fa-gem"></i>
              <span>Clubs</span>
            </li>
            <li
              style={sidebarOptions === 7 ? style : null}
              onClick={() => {
                setIsSidebar(false);
                handleOptionSelect(7);
              }}
            >
              <i className="fas fa-bookmark"></i>
              <span>Bookmarks</span>
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
            }}
          >
            <LogoutSvg />
            <span className={classes.logout}>Logout</span>
          </div>
        </div>
      </div>
    </SimpleBarReact>
  );
}

export default Sidebar;

import React, { useState, useRef, useEffect } from "react";
import useStyles from "./styles";

import MessageSvg from "../../Svg/HomeSvg/MessageSvg";
import NotificationsSvg from "../../Svg/HomeSvg/NotificationsSvg";
import SearchIconSvg from "../../Svg/HomeSvg/SearchIconSvg";
import MyProfileSvg from "../../Svg/HomeSvg/MyProfileSvg";
import FollowingSvg from "../../Svg/HomeSvg/FollowingSvg";
import FoloowersSvg from "../../Svg/HomeSvg/FollowersSvg";
import BookmarksSvg from "../../Svg/HomeSvg/BookmarksSvg";
import ClubsSvg from "../../Svg/HomeSvg/ClubsSvg";
import StoresSvg from "../../Svg/HomeSvg/StoresSvg";
import SettingsSvg from "../../Svg/HomeSvg/SettingsSvg";
import LogoutSvg from "../../Svg/HomeSvg/LogoutSvg";

function Sidebar() {
  const classes = useStyles();
  const [optionSelect, setOptionSelect] = useState(0);
  const MyProfile = useRef();
  const Following = useRef();
  const Followers = useRef();
  const Bookmarks = useRef();
  const Clubs = useRef();
  const Stores = useRef();

  function handleOptionSelect(option) {
    setOptionSelect(option);
  }

  useEffect(() => {
    switch (optionSelect) {
      case 1:
        MyProfile.current.style.backgroundColor = "rgba(119, 104, 242, 0.05)";
        Following.current.style.backgroundColor = "rgba(119, 104, 242, 0.05)";
        Followers.current.style.backgroundColor = "#FFF";
        Bookmarks.current.style.backgroundColor = "#FFF";
        Clubs.current.style.backgroundColor = "#FFF";
        Stores.current.style.backgroundColor = "#FFF";
        break;
      case 2:
        Following.current.style.backgroundColor = "rgba(119, 104, 242, 0.05)";
        MyProfile.current.style.backgroundColor = "#FFF";
        Followers.current.style.backgroundColor = "#FFF";
        Bookmarks.current.style.backgroundColor = "#FFF";
        Clubs.current.style.backgroundColor = "#FFF";
        Stores.current.style.backgroundColor = "#FFF";
        break;
      case 3:
        Followers.current.style.backgroundColor = "rgba(119, 104, 242, 0.05)";
        MyProfile.current.style.backgroundColor = "#FFF";
        Following.current.style.backgroundColor = "#FFF";
        Bookmarks.current.style.backgroundColor = "#FFF";
        Clubs.current.style.backgroundColor = "#FFF";
        Stores.current.style.backgroundColor = "#FFF";
        break;

      case 4:
        Bookmarks.current.style.backgroundColor = "rgba(119, 104, 242, 0.05)";
        MyProfile.current.style.backgroundColor = "#FFF";
        Following.current.style.backgroundColor = "#FFF";
        Followers.current.style.backgroundColor = "#FFF";
        Clubs.current.style.backgroundColor = "#FFF";
        Stores.current.style.backgroundColor = "#FFF";
        break;

      case 5:
        MyProfile.current.style.backgroundColor = "#FFF";
        Following.current.style.backgroundColor = "#FFF";
        Followers.current.style.backgroundColor = "#FFF";
        Bookmarks.current.style.backgroundColor = "#FFF";
        Clubs.current.style.backgroundColor = "rgba(119, 104, 242, 0.05)";
        Stores.current.style.backgroundColor = "#FFF";
        break;

      case 6:
        MyProfile.current.style.backgroundColor = "#FFF";
        Following.current.style.backgroundColor = "#FFF";
        Followers.current.style.backgroundColor = "#FFF";
        Bookmarks.current.style.backgroundColor = "#FFF";
        Clubs.current.style.backgroundColor = "#FFF";
        Stores.current.style.backgroundColor = "rgba(119, 104, 242, 0.05)";
        break;

      default:
        setOptionSelect(0);
    }
  }, [optionSelect]);

  return (
    <section className={classes.sidebar}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <span>Zion</span>
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
              onClick={() => {
                handleOptionSelect(1);
              }}
              ref={MyProfile}
            >
              <MyProfileSvg />
              <span>My profile</span>
            </li>
            <li
              onClick={() => {
                handleOptionSelect(2);
              }}
              ref={Following}
            >
              <FollowingSvg />
              <span>Following</span>
            </li>
            <li
              onClick={() => {
                handleOptionSelect(3);
              }}
              ref={Followers}
            >
              <FoloowersSvg />
              <span>Followers</span>
            </li>
            <li
              onClick={() => {
                handleOptionSelect(4);
              }}
              ref={Bookmarks}
            >
              <BookmarksSvg />
              <span>Bookmarks</span>
            </li>
          </ul>
        </div>

        <div className={classes.options2}>
          <ul>
            <li
              onClick={() => {
                handleOptionSelect(5);
              }}
              ref={Clubs}
            >
              <ClubsSvg />
              <span>Clubs</span>
            </li>
            <li
              onClick={() => {
                handleOptionSelect(6);
              }}
              ref={Stores}
            >
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
          <div>
            <LogoutSvg />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
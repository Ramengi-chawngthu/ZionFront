import React, { useState, useRef, useEffect } from 'react';
import useStyles from './styles';

import MessageSvg from '../../Svg/HomeSvg/MessageSvg';
import NotificationsSvg from '../../Svg/HomeSvg/NotificationsSvg';
import SearchIconSvg from '../../Svg/HomeSvg/SearchIconSvg';
import MyProfileSvg from '../../Svg/HomeSvg/MyProfileSvg';
import FollowingSvg from '../../Svg/HomeSvg/FollowingSvg';
import FoloowersSvg from '../../Svg/HomeSvg/FollowersSvg';
import BookmarksSvg from '../../Svg/HomeSvg/BookmarksSvg';

function Sidebar() {
  const classes = useStyles();
  const [optionSelect, setOptionSelect] = useState(0);
  const option1 = useRef();
  const option2 = useRef();
  const option3 = useRef();
  const option4 = useRef();

  function handleOptionSelect(option) {
    setOptionSelect(option);
    switch (option) {
      case 1:
        option1.current.style.backgroundColor = '#FFF9F9';
        option2.current.style.backgroundColor = '#FFF';
        option3.current.style.backgroundColor = '#FFF';
        option4.current.style.backgroundColor = '#FFF';
        break;
      case 2:
        option2.current.style.backgroundColor = '#FFF9F9';
        option1.current.style.backgroundColor = '#FFF';
        option3.current.style.backgroundColor = '#FFF';
        option4.current.style.backgroundColor = '#FFF';
        break;
      case 3:
        option3.current.style.backgroundColor = '#FFF9F9';
        option1.current.style.backgroundColor = '#FFF';
        option2.current.style.backgroundColor = '#FFF';
        option4.current.style.backgroundColor = '#FFF';
        break;
      case 4:
        option4.current.style.backgroundColor = '#FFF9F9';
        option1.current.style.backgroundColor = '#FFF';
        option2.current.style.backgroundColor = '#FFF';
        option3.current.style.backgroundColor = '#FFF';
        break;
      default:
        setOptionSelect(0);
    }
  }

  return (
    <section className={classes.sidebar}>
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
            type='text'
            placeholder='Search Products'
            className={classes.navSearchBar}
          ></input>
          <button type='submit'>
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
            ref={option1}
          >
            <MyProfileSvg />
            <span>My profile</span>
          </li>
          <li
            onClick={() => {
              handleOptionSelect(2);
            }}
            ref={option2}
          >
            <FollowingSvg />
            <span>Following</span>
          </li>
          <li
            onClick={() => {
              handleOptionSelect(3);
            }}
            ref={option3}
          >
            <FoloowersSvg />
            <span>Followers</span>
          </li>
          <li
            onClick={() => {
              handleOptionSelect(4);
            }}
            ref={option4}
          >
            <BookmarksSvg />
            <span>Bookmark</span>
          </li>
        </ul>
      </div>

      <div></div>
      <div></div>
    </section>
  );
}

export default Sidebar;

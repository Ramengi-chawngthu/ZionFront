import useStyles from './styles';
import Signin from '../../Svg/Singin';
import Login from '../../Svg/Login';
import React from 'react';
function Landing() {
  const classes = useStyles();

  const test = (e) => {
    console.log(e.target.parentNode);
  };
  const wRippleEffect = function (e) {
    const butn = e.target;
    if (butn.localName === 'button') {
      const x = e.clientX;
      const y = e.clientY;
      const left = e.target.offsetLeft;
      const top = e.target.offsetTop;
      const xInside = x - left;
      const yInside = y - top;
      console.log(left, top);
      const circle = document.createElement('span');
      circle.classList.add(classes.circle1);
      circle.style.top = yInside + 'px';
      circle.style.left = xInside + 'px';
      console.log(butn.localName);
      butn.appendChild(circle);
      setTimeout(() => butn.removeChild(circle), 3000);
    } else if (butn.localName === 'span') {
      const x = e.clientX;
      const y = e.clientY;
      const left = e.target.parentNode.offsetLeft;
      const top = e.target.parentNode.offsetTop;
      const xInside = x - left;
      const yInside = y - top;
      console.log(left, top);
      const circle = document.createElement('span');
      circle.classList.add(classes.circle1);
      circle.style.top = yInside + 'px';
      circle.style.left = xInside + 'px';
      console.log(butn.localName);
      butn.appendChild(circle);
      setTimeout(() => butn.removeChild(circle), 3000);
    }
  };
  const pRippleEffect = function (e) {
    const butn = e.target;
    if (butn.localName === 'button') {
      const x = e.clientX;
      const y = e.clientY;
      const left = e.target.offsetLeft;
      const top = e.target.offsetTop;
      const xInside = x - left;
      const yInside = y - top;
      console.log(left, top);
      const circle = document.createElement('span');
      circle.classList.add(classes.circle2);
      circle.style.top = yInside + 'px';
      circle.style.left = xInside + 'px';
      console.log(butn.localName);
      butn.appendChild(circle);
      setTimeout(() => butn.removeChild(circle), 3000);
    } else if (butn.localName === 'span') {
      const x = e.clientX;
      const y = e.clientY;
      const left = e.target.parentNode.offsetLeft;
      const top = e.target.parentNode.offsetTop;
      const xInside = x - left;
      const yInside = y - top;
      console.log(left, top);
      const circle = document.createElement('span');
      circle.classList.add(classes.circle2);
      circle.style.top = yInside + 'px';
      circle.style.left = xInside + 'px';
      console.log(butn.localName);
      butn.appendChild(circle);
      setTimeout(() => butn.removeChild(circle), 3000);
    }
  };
  return (
    <React.Fragment>
      <div className={classes.landing}>
        <header className={classes.header}>
          <div className={classes.nav}>
            <span>Zion</span>
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>About Us</li>
            </ul>
          </div>
        </header>
        <main className={classes.main}>
          <div className={classes.title}>
            <p>
              Zion is a <span className={classes.platform}>platform</span> that
              allows you to
            </p>
            <p>
              <span className={classes.expose}>expose</span> your work
            </p>
            <div className={classes.titleButton}>
              <button className={classes.button1} onClick={wRippleEffect}>
                <span>
                  <Signin />
                  Sign in
                </span>
              </button>

              <button className={classes.button2} onClick={pRippleEffect}>
                <span>
                  <Login />
                  Log in
                </span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default Landing;
// butn.parentNode.insertBefore(circle);

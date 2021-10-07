import useStyles from '../Components/Landing/styles';
//SVG's
import Signin from '../Svg/LandingSvg/Signin';
import Login from '../Svg/LandingSvg/Login';
import Fast from '../Svg/LandingSvg/Fast';
import Simple from '../Svg/LandingSvg/Simple';
import Expose from '../Svg/LandingSvg/Expose';
import ExploreContent from '../Svg/LandingSvg/ExploreContent';
//Material UI
import Button from '@material-ui/core/Button';
//react-router-dom
import { useHistory } from 'react-router-dom';

function Landing() {
  let history = useHistory();
  const classes = useStyles();
  return (
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
            <Button
              variant="contained"
              color="primary"
              className={classes.titleBtn1}
            >
              <Signin />
              Sign in
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className={classes.titleBtn2}
            >
              <Login />
              Log in
            </Button>
          </div>
        </div>
        <div className={classes.image}></div> {/*Just a placeholder for now*/}
        <div className={classes.exploreContent}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.exploreBtn}
            onClick={() => {
              history.push('./home');
            }}
          >
            Explore Content
            <ExploreContent />
          </Button>
        </div>
        <div className={classes.cards}>
          <div className={classes.card1}>
            <Fast />
            <p>Fast</p>
            <p>No more time wasting</p>
            <p>Easily find services</p>
          </div>

          <div className={classes.card2}>
            <Simple />
            <p>Simple</p>
            <p>No complication</p>
            <p>Everything is Peer to Peer(P2P)</p>
          </div>

          <div className={classes.card3}>
            <Expose />
            <p>Expose</p>
            <p>Show your work to others</p>
            <p>Gain recognition</p>
          </div>
        </div>
      </main>

      <footer className={classes.footer}>
        <p>&#169; 2021 Zion. All rights reserved</p>
      </footer>
    </div>
  );
}

export default Landing;

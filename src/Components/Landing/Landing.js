import useStyles from './styles';
import Signin from '../../Svg/Singin';
import Login from '../../Svg/Login';
import Fast from '../../Svg/Fast';
import Plus from '../../Svg/Plus';
import Shield from '../../Svg/Shield';
import ExploreCont from '../../Svg/ExploreCont';
import Button from '@material-ui/core/Button';
// import { shadows } from '@material-ui/system';
import Box from '@material-ui/core/Box';
function Landing() {
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
          <Button variant='contained'>
            Explore Content
            <ExploreCont />
          </Button>
        </div>
        <div className={classes.titleButton}>
          <Button variant='outlined'>
            <Login />
            Log in
          </Button>
          <Button
            variant='contained'
            style={{ color: 'white', backgroundColor: '#7768F2' }}
            // disabled
            // classes={{
            //   titleButton: classes.titleButton, // class name, e.g. `root-x`
            //   disabled: classes.disabled, // class name, e.g. `disabled-x`
            // }}
          >
            <Signin />
            Sign up
          </Button>
        </div>

        <div className={classes.rectContainer}>
          <div className={classes.rect} style={{ backgroundColor: '#8B81FF' }}>
            <Box boxShadow={3} style={{ margin: '24px 24px 0px 24px' }}>
              <div>
                <Fast />
              </div>
            </Box>{' '}
            <span>FAST</span>
            <p>No more time wasting </p>
            <p style={{ margin: '0px 25px 30px 25px' }}>Easily find services</p>
          </div>
          <div className={classes.rect} style={{ backgroundColor: '#F9C249' }}>
            {' '}
            <Box boxShadow={3} style={{ margin: '24px 24px 0px 24px' }}>
              <div>
                <Shield />
              </div>
            </Box>{' '}
            <span>SIMPLE</span>
            <p>No compications</p>
            <p style={{ margin: '0px 25px 30px 25px' }}>
              Everything is direct, P2P
            </p>
          </div>
          <div className={classes.rect} style={{ backgroundColor: '#FF6B6B' }}>
            {' '}
            <Box boxShadow={3} style={{ margin: '24px 24px 0px 24px' }}>
              <div>
                <Plus />
              </div>
            </Box>{' '}
            <span>EXPOSE</span>
            <p>Show you work to others</p>
            <p style={{ margin: '0px 25px 30px 25px' }}>Gain recognition</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landing;

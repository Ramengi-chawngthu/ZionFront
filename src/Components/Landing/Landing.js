import useStyles from "./styles";
import Signin from "../../Svg/Singin";
import Login from "../../Svg/Login";
import Button from "@material-ui/core/Button";

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
          <div className={classes.titleButton}>
            <Button variant="contained" color="primary">
              <Signin />
              Sign in
            </Button>
            <Button
              variant="outlined"
              color="primary"
              style={{ border: "2px solid #7768F2" }}
            >
              <Login />
              Log in
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landing;

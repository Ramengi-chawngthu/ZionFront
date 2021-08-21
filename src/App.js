import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./Components/Styles/Theme";
import Home from "./Components/Home/Home";
import Landing from "./Components/Landing/Landing";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

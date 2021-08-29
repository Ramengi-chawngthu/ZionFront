import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Components/Styles/Theme';
import Home from './Components/Home/Home';
import Landing from './Components/Landing/Landing';
import MyProfile from './Components/MyProfile/MyProfile';

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Landing />
            </Route>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/myprofile'>
              <MyProfile />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

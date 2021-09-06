import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Components/Styles/Theme';
import Home from './Components/Home/Home';
import Landing from './Components/Landing/Landing';
import SidebarContext from './Components/Context/SidebarContext';

function App() {
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <>
      <SidebarContext.Provider value={{ isSidebar, setIsSidebar }}>
        <ThemeProvider theme={Theme}>
          <Router>
            <Switch>
              <Route exact path='/'>
                <Landing />
              </Route>
              <Route exact path='/home'>
                <Home />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </SidebarContext.Provider>
    </>
  );
}

export default App;

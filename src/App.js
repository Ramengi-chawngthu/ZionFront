import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Components/Styles/Theme';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';
import Store from './Components/Home/Store/Store';
import SidebarContext from './Components/Context/SidebarContext';
import SidebarOptionsContext from './Components/Context/SidebarOptionsContext';

function App() {
  const [isSidebar, setIsSidebar] = useState(false);
  const [sidebarOptions, setSidebarOptions] = useState(0);
  return (
    <>
      <SidebarOptionsContext.Provider
        value={{ sidebarOptions, setSidebarOptions }}>
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
                <Route exact path='/home/store'>
                  <Store />
                </Route>
              </Switch>
            </Router>
          </ThemeProvider>
        </SidebarContext.Provider>
      </SidebarOptionsContext.Provider>
    </>
  );
}

export default App;

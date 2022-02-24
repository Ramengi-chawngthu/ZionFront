import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Styles/Theme';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Store from './Pages/Store';
import MyProfile from './Pages/MyProfile';
import SidebarContext from './Components/Context/SidebarContext';
import SidebarOptionsContext from './Components/Context/SidebarOptionsContext';

function App() {
  const [isSidebar, setIsSidebar] = useState(false);
  const [sidebarOptions, setSidebarOptions] = useState(0);
  return (
    <>
      <Router>
        <SidebarOptionsContext.Provider
          value={{ sidebarOptions, setSidebarOptions }}
        >
          <SidebarContext.Provider value={{ isSidebar, setIsSidebar }}>
            <ThemeProvider theme={Theme}>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/home/store" component={Store} />
                <Route exact path="/myprofile" component={MyProfile} />
              </Switch>
            </ThemeProvider>
          </SidebarContext.Provider>
        </SidebarOptionsContext.Provider>
      </Router>
    </>
  );
}

export default App;

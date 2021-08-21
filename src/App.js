import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./Components/Styles/Theme";
import Home from "./Components/Home/Home";
import Landing from "./Components/Landing/Landing";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;

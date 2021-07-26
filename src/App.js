import Landing from "./Components/Landing/Landing";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./Components/Styles/Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Landing />
      </ThemeProvider>
    </>
  );
}

export default App;

import "./App.css";
import Login from "./components/Login";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Switch } from "@mui/material";
import { useState } from "react";

// Define theme settings
const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
};
const App = () => {
  // The light theme is used by default
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // This function is triggered when the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <Switch
        sx={{ float: "right" }}
        checked={isDarkTheme}
        onChange={changeTheme}
      />
      <Login />
    </ThemeProvider>
  );
};

export default App;

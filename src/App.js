import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ChaguaRouter from './components/ChaguaRouter.jsx'
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: green[500],
      main: green[700],
      dark: green[900]
    },
    secondary: {
      light: indigo[500],
      main: indigo[700],
      dark: indigo[900]
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChaguaRouter />
    </ThemeProvider>
  );
}

export default App;

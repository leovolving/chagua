import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chagua from './components/Chagua.jsx'
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <Typography variant='h1'>Chagua</Typography>
        <p>Enter the options and the computer will randomly select a decision.</p>
      </header>
      <section>
        <Chagua />
      </section>
    </ThemeProvider>
  );
}

export default App;

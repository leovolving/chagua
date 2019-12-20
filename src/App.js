import React, {Fragment} from 'react';
import Chagua from './components/Chagua.jsx'
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <Fragment>
      <header>
        <Typography variant='h1'>Chagua</Typography>
        <p>Enter the options and the computer will randomly select a decision.</p>
      </header>
      <section>
        <Chagua />
      </section>
    </Fragment>
  );
}

export default App;

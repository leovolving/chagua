import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import Chagua from '../../Chagua'

const HomePage = () => (
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

export default HomePage;

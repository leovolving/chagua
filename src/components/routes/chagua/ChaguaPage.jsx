import React from 'react';
import Typography from '@material-ui/core/Typography';

class ChaguaPage extends React.Component {
    render() {
        const {location: {selection}} = this.props;
        return (
            <React.Fragment>
            <h1>Chagua Page</h1>
            {selection &&
                <div className='selection'>
                    <Typography variant='h2'>{selection}</Typography>
                    <p>the chooser has chosen {selection}</p>
                </div>}
            </React.Fragment>
        )
    }
}

export default ChaguaPage;

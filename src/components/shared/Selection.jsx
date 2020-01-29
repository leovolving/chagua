import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Selection = ({onClick, selection}) => (
  <div className='selection-container'>
      <Button color='primary' onClick={onClick} variant='contained'>Choose</Button>
      {selection &&
        <div className='selection'>
            <Typography variant='h2'>{selection}</Typography>
            <p>the chooser has chosen {selection}</p>
        </div>}
  </div>
);

export default Selection;

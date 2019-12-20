import React from 'react';
import Button from '@material-ui/core/Button';

const Selection = ({onClick, selection}) => (
  <div>
      <Button color='primary' onClick={onClick} variant='contained'>Choose For Me</Button>
      {selection &&
        <div>
            <h2>{selection}</h2>
            <p>the chooser has chosen {selection}</p>
        </div>}
  </div>
);

export default Selection;
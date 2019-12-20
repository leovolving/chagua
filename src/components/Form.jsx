import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

 const Form = ({onSubmit}) => (
    <form onSubmit={onSubmit}>
        <TextField id='add-item' label='Add item' name='add-item' />
        <Button type='submit' color='primary' variant='contained'>Submit</Button>
    </form>
);

export default Form;

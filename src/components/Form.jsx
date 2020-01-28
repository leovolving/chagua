import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

 const Form = ({onSubmit}) => (
    <form onSubmit={onSubmit}>
        <TextField className='input' id='add-item' label='Add item' name='add-item' />
        &nbsp;
        <Button type='submit' color='primary' variant='outlined'>Add</Button>
    </form>
);

export default Form;

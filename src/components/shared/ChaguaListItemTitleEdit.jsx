import React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

class ChaguaListItemTitleEdit extends React.Component {

    state = {
        value: this.props.title
    }

    handleChange = event => {
        this.setState({value: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        const {onSubmit} = this.props;
        const {value} = this.state;
        onSubmit(value);
    }
    
    render (){
        const {onCancel} = this.props;
        const {value} = this.state;
        return (
            <form onSubmit={this.handleSubmit} onCancel={onCancel}>
                <TextField required id="item-title" label='Edit title' onChange={this.handleChange} value={value} />
                <IconButton edge='end' aria-label='delete' type='submit'>
                            <DoneIcon />
                </IconButton>
            </form>
        );
    }
}

export default ChaguaListItemTitleEdit;
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

const styles = {
    root: {
        display: 'block'
    }
  }

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
    
    render () {
        const {value} = this.state;
        return (
            <form className={this.props.classes.root} onSubmit={this.handleSubmit}>
                <TextField required id="item-title" label='Edit title' onChange={this.handleChange} value={value} />
                <IconButton edge='end' aria-label='submit' type='submit'>
                            <DoneIcon />
                </IconButton>
            </form>
        );
    }
}

export default withStyles(styles)(ChaguaListItemTitleEdit);
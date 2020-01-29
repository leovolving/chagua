import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
    disabledText: {
        color: theme.palette.error.main
    }
  }));

const ChaguaListItemTitle = ({enabled, onEdit, title}) => {
    const classes = useStyles();
    return (
        <Fragment>
            {title}
            {!enabled && <span className={classes.disabledText}> - disabled</span>}
            <IconButton edge='end' aria-label='edit' onClick={onEdit}>
                <EditIcon />
            </IconButton>
        </Fragment>
    );
}

export default ChaguaListItemTitle;
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    disabledText: {
        color: theme.palette.error.main
    },
    listItem: {
        '&:nth-child(odd)': {
            backgroundColor: '#eee'
        },
        '&:nth-child(even)': {
            backgroundColor: '#edf3d8'
        }
    }
  }));

const ChaguaListItem = ({data, index, onDeleteCallback, onToggleCallback}) => {
    const classes = useStyles();
    const {enabled, lastSelected} = data;

    const onDelete = () => onDeleteCallback(index);
    const onToggle = () => onToggleCallback(index);

    const getSecondaryText = lastSelected => lastSelected
        ? `Last selected ${moment(lastSelected).format("MMM D 'YY")}.`
        : 'Never selected.';

    const getDisabledText = item => (
        <Fragment>
            {item.title}
            {!item.enabled && <span className={classes.disabledText}> - disabled</span>}
        </Fragment>
    );

    return (
        <ListItem ContainerProps={{className: classes.listItem}} key={index}>
            <ListItemText primary={getDisabledText(data)} secondary={getSecondaryText(lastSelected)} />
            <ListItemSecondaryAction>
                <IconButton edge='start' aria-label={enabled ? 'disable' : 'enable'} onClick={onToggle}>
                {enabled
                    ? <RemoveCircleIcon />
                    : <AddCircleIcon />
                }
                </IconButton>
                <IconButton edge='end' aria-label='delete' onClick={onDelete}>
                <DeleteForeverIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default ChaguaListItem;

import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    root: {
      width: 600,
      backgroundColor: theme.palette.background.paper,
    },
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

const getSecondaryText = lastSelected => lastSelected ? `Last selected ${moment(lastSelected).format("MMM D 'YY")}.` : 'Never selected.';

const ItemList = ({items, onDeleteCallback, onToggleCallback}) => {
    const classes = useStyles();
    const getDisabledText = item => (
        <Fragment>
            {item.title}
            {!item.enabled && <span className={classes.disabledText}> - disabled</span>}
        </Fragment>
    );

    return (
        <List className={classes.root}>
            {items.map((i, k) => {
                const onDelete = () => onDeleteCallback(k);
                const onToggle = () => onToggleCallback(k);
                return (
                    <ListItem ContainerProps={{className: classes.listItem}} key={k}>
                        <ListItemText primary={getDisabledText(i)} secondary={getSecondaryText(i.lastSelected)} />
                        <ListItemSecondaryAction>
                            <IconButton edge='start' aria-label={i.enabled ? 'disable' : 'enable'} onClick={onToggle}>
                            {i.enabled
                                ? <RemoveCircleIcon />
                                : <AddCircleIcon />
                            }
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={onDelete}>
                            <DeleteForeverIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>)
            })}
        </List>
    );
}

export default ItemList;
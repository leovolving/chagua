import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    listItem: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#eee'
        },
        '&:nth-of-type(even)': {
            backgroundColor: '#edf3d8'
        }
    }
  }));

const ItemList = ({items}) => {
    const classes = useStyles();
    return (
        <List className={classes.root}>
            {items.map((i, k) => <ListItem className={classes.listItem} key={k}>
                        <ListItemText>
                            {i.value}
                        </ListItemText>
                </ListItem>)}
        </List>
    );
}

export default ItemList;
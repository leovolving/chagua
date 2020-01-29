import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ChaguaListItem from './ChaguaListItem';

const useStyles = makeStyles(theme => ({
    root: {
      width: 600,
      backgroundColor: theme.palette.background.paper,
    }
  }));

const ChaguaList = ({actions, items}) => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {items.map((i, j) => (
                <ChaguaListItem
                    actions={actions}
                    data={i}
                    index={j}
                    key={j}
                />
            ))}
        </List>
    );
}

export default ChaguaList;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
  import HomePage from './routes/home/HomePage';
  import ListPage from './routes/list/ListPage';
  import ChaguaPage from './routes/chagua/ChaguaPage';

const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.background.paper
    }
}));

const ChaguaRouter = () => {
    const classes = useStyles();
    return (
        <Router className={classes.root}>
            <Link to='/'>Home</Link>
            <Link to='/list/test'>List</Link>

            <Switch>
                <Route exact path='/chagua' component={ChaguaPage} />

                <Route exact path='/list/:id'>
                    <ListPage />
                </Route>

                <Route path='/'>
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
}

export default ChaguaRouter;

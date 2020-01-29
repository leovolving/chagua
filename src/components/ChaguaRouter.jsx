import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
  import HomePage from './routes/home/HomePage';
  import ListPage from './routes/list/ListPage';

const ChaguaRouter = () => (
    <Router>
        <Link to='/'>Home</Link>
        <Link to='/list/test'>List</Link>

        <Switch>
            <Route exact path='/list/:id'>
                <ListPage />
            </Route>

            <Route path='/'>
                <HomePage />
            </Route>
        </Switch>
    </Router>
);

export default ChaguaRouter;

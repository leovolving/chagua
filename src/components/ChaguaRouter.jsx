import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
  import Home from './Home.jsx';
  import List from './List.jsx';

const ChaguaRouter = () => (
    <Router>
        <Link to='/'>Home</Link>
        <Link to='/list/test'>List</Link>

        <Switch>
            <Route exact path='/list/:id'>
                <List />
            </Route>

            <Route path='/'>
                <Home />
            </Route>
        </Switch>
    </Router>
);

export default ChaguaRouter;

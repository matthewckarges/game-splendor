import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
  } from "react-router-dom";
import Game from './components/game'
import DrawerTest from './testcomponents/drawertest'
import NewGame from './components/newgame'
import DataStore from './data/datastore'


export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/drawertest">
                    <DrawerTest />
                </Route>
                <Route path="/new">
                    <NewGame />
                </Route>
                <Route path="/">
                    {DataStore.Game ? <Game /> : <Redirect to="/new" /> }
                </Route>
            </Switch>
        </Router>
    );
}
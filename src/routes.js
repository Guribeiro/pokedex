import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';

export default function Routes() {
    return (
        <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/pokemon/:name' component={Pokemon} />
            </Switch>
        </BrowserRouter>
    )
}
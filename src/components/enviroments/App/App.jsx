/* eslint-disable  react/jsx-no-bind */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CodeSplit, Home, Navigation, NotFound } from 'components';

import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Navigation />
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/code-split" component={CodeSplit} />
                    <Route component={NotFound} />
                </Switch>
            </main>
        </div>
    );
};

App.propTypes = {};

export default App;

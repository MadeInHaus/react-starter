/* eslint-disable  react/jsx-no-bind */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CodeSplit, Navigation, NotFound, Text } from 'components';

import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Navigation />
            <main>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <Text tag="h1">Home</Text>}
                    />
                    <Route
                        path="/about"
                        render={() => <Text tag="h1">About</Text>}
                    />
                    <Route
                        path="/contact"
                        render={() => <Text tag="h1">Contact</Text>}
                    />
                    <Route path="/code-split" component={CodeSplit} />
                    <Route component={NotFound} />
                </Switch>
            </main>
        </div>
    );
};

App.propTypes = {};

export default App;

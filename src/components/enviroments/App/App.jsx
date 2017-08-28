import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Navigation, NotFound } from 'components';

import './App.scss';

const App = () => {
    return (
        <div styleName="app">
            <nav>
                <Navigation />
            </nav>
            <main>
                <Switch>
                    <Route exact path="/" render={() => <div>Home</div>} />
                    <Route path="/about" render={() => <div>About</div>} />
                    <Route path="/contact" render={() => <div>Contact</div>} />
                    <Route component={NotFound} />
                </Switch>
            </main>
        </div>
    );
};

App.propTypes = {};

export default App;

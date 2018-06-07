/* eslint-disable  react/jsx-no-bind */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Button } from 'ui';
import { CodeSplit, Home, Navigation, NotFound } from 'components';

import styles from './App.scss';

const App = () => {
    return (
        <div className={styles.root}>
            <Navigation />
            <main className={styles.main}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/code-split" component={CodeSplit} />
                    <Route component={NotFound} />
                </Switch>
            </main>
            <footer className={styles.footer}>
                <Button href="https://madeinhaus.com">&copy; HAUS</Button>
            </footer>
        </div>
    );
};

App.propTypes = {};

export default App;

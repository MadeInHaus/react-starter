/* eslint-disable  react/jsx-no-bind */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';

import { Clickable } from '@ui';
import CodeSplit from '@components/App/CodeSplit';
import Home from '@components/App/Home';
import Navigation from '@components/App/Navigation';
import NotFound from '@components/App/NotFound';

import styles from './App.scss';

function App() {
    return (
        <div className={styles.root}>
            <Helmet>
                <title>HAUS React Starter</title>
                <meta
                    name="description"
                    content="A React starter leveraging Redux and Webpack built by the HAUS team."
                />
            </Helmet>
            <Navigation />
            <main className={styles.main}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/code-split" component={CodeSplit} />
                    <Route component={NotFound} />
                </Switch>
            </main>
            <footer className={styles.footer}>
                <Clickable theme="primary" href="https://madeinhaus.com">
                    &copy; HAUS
                </Clickable>
            </footer>
        </div>
    );
}

App.propTypes = {};

export default App;

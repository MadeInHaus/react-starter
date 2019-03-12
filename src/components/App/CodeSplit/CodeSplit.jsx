import React, { Fragment, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';

const LazyLoaded = lazy(() => import('./LazyLoaded'));

function CodeSplit() {
    return (
        <Fragment>
            <Helmet>
                <title>Code split example | HAUS React Starter</title>
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyLoaded />
            </Suspense>
        </Fragment>
    );
}

export default CodeSplit;

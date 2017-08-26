import React from 'react';
import { node, object, string } from 'prop-types';

class Html extends React.Component {
    static propTypes = {
        appConfig: object.isRequired,
        children: node.isRequired,
        initialState: object.isRequired,
        title: string.isRequired,
    };

    render() {
        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <title>
                        {this.props.title}
                    </title>
                    <meta name="description" content="" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta property="og:title" content={this.props.title} />
                    <meta property="og:type" content="article" />
                    {/* <meta property="og:url" content="" /> */}
                    {/* <meta property="og:image" content="" /> */}
                    <meta
                        property="og:description"
                        content="Description Here"
                    />
                    {/* <link rel="shortcut icon" href="" /> */}
                    {console.log(process.env.NODE_ENV)}
                    {process.env.NODE_ENV === 'production' &&
                        <link rel="stylesheet" href="css/app.css" />}
                </head>
                <body>
                    <div id="app" className="app">
                        {this.props.children}
                    </div>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `window.__INITIAL_STATE__ = ${JSON.stringify(
                                this.props.initialState
                            )}`,
                        }}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `window.__APP_CONFIG__ = ${JSON.stringify(
                                this.props.appConfig
                            )}`,
                        }}
                    />
                    <script src="/js/vendor.bundle.js" defer />
                    <script src="/js/client.js" defer />
                </body>
            </html>
        );
    }
}

export default Html;

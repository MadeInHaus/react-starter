import { Component } from 'react';
import { func, object, node } from 'prop-types';

export default class PathProvider extends Component {
    static propTypes = {
        assetPaths: object.isRequired,
        children: node.isRequired,
    };

    static childContextTypes = {
        assetUrl: func,
        siteUrl: func,
    };

    getChildContext() {
        return {
            assetUrl: path => {
                const { env, aws = {} } = this.props.assetPaths;
                const {
                    bucket,
                    bypassCdn,
                    cloudfront,
                    folder,
                    prefix,
                    urlHash,
                    useS3,
                } = aws;

                let urlBase;

                if (cloudfront && !bypassCdn) {
                    urlBase = `${cloudfront}${urlHash}/`;
                } else {
                    urlBase = `http://${bucket}.s3.amazonaws.com/${prefix}/${folder}/`;
                }

                if (env === 'local' || !useS3) {
                    return path;
                }

                if (path.indexOf('http') === 0 || path.indexOf(urlBase) === 0) {
                    return path;
                }

                const cleanPath =
                    path.slice(0, 1) === '/' ? path.slice(1) : path;

                // Prepend the urlBase and remove any incidences of multiple
                // slashes after the initial http://
                const slashRegex = /([^:])\/{1,}/g;
                return `${urlBase}${cleanPath}`.replace(slashRegex, '$1/');
            },
            siteUrl: () => this.props.assetPaths.siteUrl,
        };
    }

    render() {
        return this.props.children;
    }
}

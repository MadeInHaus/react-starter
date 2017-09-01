import React, { PureComponent } from 'react';
import { object, string } from 'prop-types';

import { Img, Loader as DefaultLoader } from 'components';

export default class PreloadImage extends PureComponent {
    static propTypes = {
        loader: object,
        src: string.isRequired,
    };

    static defaultProps = {
        loader: <DefaultLoader />,
    };

    state = {
        loaded: false,
    };

    componentDidMount() {
        this.preload();
    }

    componentWillUnmount() {
        if (this.instance) {
            this.instance.onload = Function.prototype;
            this.instance.onerror = Function.prototype;
        }
    }

    instance = null;

    preload() {
        const { src } = this.props;
        this.instance = new Image();
        this.instance.onload = () => this.handlePreloadImageLoaded();
        this.instance.onerror = () => this.handlePreloadImageLoaded();
        this.instance.src = src;

        if (this.instance.complete) {
            this.handlePreloadImageLoaded();
        }
    }

    handlePreloadImageLoaded = () => {
        this.setState({ loaded: true });
    };

    render() {
        const { loader } = this.props;
        const { loaded } = this.state;

        if (!loaded) {
            return <loader />;
        }

        return <Img {...this.props} />;
    }
}

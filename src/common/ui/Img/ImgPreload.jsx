import React, { PureComponent } from 'react';
import { node, string } from 'prop-types';

import { Img, Loader as DefaultLoader } from 'ui';
import { FadeInOut } from 'react-animation-components';

export default class ImgPreload extends PureComponent {
    static propTypes = {
        loader: node,
        src: string.isRequired,
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
        const { loader, ...props } = this.props;
        const { loaded } = this.state;

        if (!loaded) {
            return loader || <DefaultLoader />;
        }

        return (
            <FadeInOut in={loaded}>
                <Img {...props} />
            </FadeInOut>
        );
    }
}

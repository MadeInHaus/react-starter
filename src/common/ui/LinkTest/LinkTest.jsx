// Link.react.js
import React from 'react';
import cx from 'classnames';
import styles from './LinkTest.scss';

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

export default class LinkTest extends React.Component {
    constructor(props) {
        super(props);

        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);

        this.state = {
            class: STATUS.NORMAL,
        };
    }

    _onMouseEnter() {
        this.setState({ class: STATUS.HOVERED });
    }

    _onMouseLeave() {
        this.setState({ class: STATUS.NORMAL });
    }

    render() {
        const classNames = cx(styles.root, {
            [styles.hovered]: this.state.class === 'hovered',
            [styles.normal]: this.state.class === 'normal',
        });
        return (
            <a
                className={classNames}
                href={this.props.page || '#'}
                onMouseEnter={this._onMouseEnter}
                onMouseLeave={this._onMouseLeave}
            >
                {this.props.children}
            </a>
        );
    }
}

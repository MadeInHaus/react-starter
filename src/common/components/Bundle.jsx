import { Component } from 'react';
import PropTypes from 'prop-types';

const isPromise = o => typeof o === 'object' && typeof o.then === 'function';

export default class Bundle extends Component {
    static propTypes = {
        children: PropTypes.func.isRequired,
        load: PropTypes.func.isRequired,
    };

    state = {
        mod: null,
    };

    componentDidMount() {
        this.load(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps);
        }
    }

    onModuleReady = mod => {
        this.setState({
            mod: mod.default ? mod.default : mod,
        });
    };

    load(props) {
        const { load } = props;

        this.setState({
            mod: null,
        });

        const res = load(this.onModuleReady);

        if (isPromise(res)) {
            res.then(this.onModuleReady);
        }
    }

    render() {
        return this.state.mod ? this.props.children(this.state.mod) : null;
    }
}

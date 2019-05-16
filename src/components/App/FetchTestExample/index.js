import React from 'react';

import { getCharacterOrigin } from './fetchTestFunctions';

class FetchExample extends React.Component {
    state = {
        origin: '',
    };
    componentDidMount() {
        getCharacterOrigin(fetch, 2).then(result => {
            this.setState({
                origin: result,
            });
        });
    }
    render() {
        return <p>{this.state.origin}</p>;
    }
}

export default FetchExample;

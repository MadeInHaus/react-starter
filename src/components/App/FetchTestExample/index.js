import React from 'react';

import { getCharacterOrigin } from './fetchTestFunctions';

class TestExample extends React.Component {
    state = {
        origin: '',
    };
    componentDidMount() {
        getCharacterOrigin(fetch, 2).then(result => {
            console.log('origin:', result);
            this.setState({
                origin: result,
            });
        });
    }
    render() {
        return <p>{this.state.origin}</p>;
    }
}

export default TestExample;

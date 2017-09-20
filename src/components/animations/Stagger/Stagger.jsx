import React from 'react';
import { node, number, string } from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';

const Stagger = ({ children, chunk, delay, delayType, ...props }) => {
    const getDelay = idx => {
        if (chunk) {
            return idx % chunk * delay;
        }
        return idx * delay;
    };

    return (
        <TransitionGroup appear {...props}>
            {React.Children.map(children, (child, i) =>
                React.cloneElement(child, {
                    style: {
                        [`${delayType}Delay`]: `${getDelay(i)}ms`,
                    },
                })
            )}
        </TransitionGroup>
    );
};

Stagger.propTypes = {
    children: node,
    chunk: number,
    delay: number,
    delayType: string,
};

Stagger.defaultProps = {
    delay: 100,
    delayType: 'transition',
};

export default Stagger;

import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from 'ui';

test('When Button is Clicked', () => {
    const component = renderer.create(<Button>Facebook</Button>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onClick();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

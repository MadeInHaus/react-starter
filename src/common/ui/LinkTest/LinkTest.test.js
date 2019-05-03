// Link.react.test.js
import React from 'react';
import LinkTest from './LinkTest';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <LinkTest page="http://www.facebook.com">Facebook</LinkTest>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

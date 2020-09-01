import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Header';

const tree = renderer.create(<Header />).toJSON();

describe('Header component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})
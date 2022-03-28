/* eslint-disable prettier/prettier */
import React from 'react';
import renderer from 'react-test-renderer';
import { HeaderBar } from '../src/components/Headerbar';


test('renders correctly', () => {
    const tree = renderer.create( <HeaderBar />).toJSON();
    expect(tree).toMatchSnapshot();
})
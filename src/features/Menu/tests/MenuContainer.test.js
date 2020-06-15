import React from 'react';
import { shallow } from 'enzyme';
import MenuContainer from '../MenuContainer';

describe('MenuContainer', () => {
  it('renders', () => {
    const wrapper = shallow(<MenuContainer />);
    expect(wrapper).toHaveLength(1);
  });
})


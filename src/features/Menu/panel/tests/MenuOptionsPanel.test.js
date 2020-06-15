import React from 'react';
import { shallow } from 'enzyme';
import MenuOptionsPanel from '../MenuOptionsPanel';

describe('MenuOptionsPanel', () => {
  const data = {
    items: {
      1: {
        name: 'Ravioli',
        dietaries: ['v', 'ne']
      },
      2: {
        name: 'Spaghetti',
        dietaries: ['v']
      }
    },
    onSelectItem: () => {}
  }
  
  it('renders with two menu options', () => {
    const wrapper = shallow(<MenuOptionsPanel {...data} />);
    expect(wrapper.find('OptionItem')).toHaveLength(2);
  });
  
  it('does not render any menu options if none exists', () => {
    const wrapper = shallow(<MenuOptionsPanel {...data} items={{}} />);
    expect(wrapper.find('OptionItem')).toHaveLength(0);
  });
})

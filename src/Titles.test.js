import React from 'react';
import { shallow } from 'enzyme';

import Titles from './components/Titles';

it('renders title', () => {
  const wrapper  = shallow(<Titles />)
  const appTitle = <h1 className="app-title">Solar</h1>
  expect(wrapper.contains(appTitle)).toEqual(true);
});

it('renders slogan', () => {
  const wrapper  = shallow(<Titles />)
  const appLine  = <p className='app-subtitle'>Weather Finder</p>
  expect(wrapper.contains(appLine)).toEqual(true);
});

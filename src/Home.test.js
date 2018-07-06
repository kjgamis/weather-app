import React from 'react';
import { shallow } from 'enzyme';

import Home from './components/Home';


it('renders Home component', () => {
  const wrapper = shallow(<Home />);
  const name = <h1>Simple Weather App</h1>
  expect(wrapper.contains(name)).toEqual(true);
});

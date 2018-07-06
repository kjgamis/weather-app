import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

import Home from './components/Home'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders Home component', () => {
  const wrapper = shallow(<Home />);
  const name = <h1>Simple Weather App</h1>
  expect(wrapper.contains(name)).toEqual(true);
})

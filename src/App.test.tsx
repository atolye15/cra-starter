import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Routes from './routes';

it('has a header', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('header').exists()).toBe(true);
});

it('has a footer', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('footer').exists()).toBe(true);
});

it('contains routes', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.containsMatchingElement(<Routes />)).toBe(true);
});

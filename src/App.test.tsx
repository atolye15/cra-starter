import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Routes from './routes';

it('has a header', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.containsMatchingElement(<header />));
});

it('has a footer', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.containsMatchingElement(<footer />));
});

it('contains routes', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.containsMatchingElement(<Routes />));
});

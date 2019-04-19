import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Routes from './routes';

it('has a header', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.containsMatchingElement(<header>Header</header>)).toBe(true);
});

it('has a footer', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.containsMatchingElement(<footer>Footer</footer>)).toBe(true);
});

it('contains routes', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.containsMatchingElement(<Routes />)).toBe(true);
});

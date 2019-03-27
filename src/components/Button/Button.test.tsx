import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

it('renders correctly primary button', () => {
  const wrapper = shallow(<Button primary={true}>Primary Button</Button>);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly secondary button', () => {
  const wrapper = shallow(<Button secondary={true}>Secondary Button</Button>);

  expect(wrapper).toMatchSnapshot();
});

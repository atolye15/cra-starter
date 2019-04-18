import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
  .add('Primary', () => <Button primary>Primary Button</Button>)
  .add('Secondary', () => <Button secondary>Secondary Button</Button>);

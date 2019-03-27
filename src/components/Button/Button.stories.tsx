import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
  .add('Primary', () => <Button primary={true}>Primary Button</Button>)
  .add('Secondary', () => <Button secondary={true}>Secondary Button</Button>);

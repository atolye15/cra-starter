import React, { FunctionComponent } from 'react';
import cx from 'classnames';

import './Button.scss';

type Props = JSX.IntrinsicElements['button'] & {
  primary?: boolean;
  secondary?: boolean;
};

const Button: FunctionComponent<Props> = ({ primary, secondary, className, children, ...rest }) => {
  const classNames = cx(
    'Button',
    { 'Button-primary': primary, 'Button-secondary': secondary },
    className,
  );

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};

export default Button;

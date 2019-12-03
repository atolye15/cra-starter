import React, { FC } from 'react';
import cx from 'classnames';

import './Button.scss';

type Props = JSX.IntrinsicElements['button'] & {
  primary?: boolean;
  secondary?: boolean;
};

const Button: FC<Props> = ({ primary, secondary, className, children, onClick }) => {
  const classNames = cx(
    'Button',
    { 'Button-primary': primary, 'Button-secondary': secondary },
    className,
  );

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

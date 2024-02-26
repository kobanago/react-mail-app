import { Button as MuiButton } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({
  label,
  clickHandler,
  to,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton onClick={clickHandler} component={Link} to={to} {...props}>
      {label}
      {props.children}
    </MuiButton>
  );
};

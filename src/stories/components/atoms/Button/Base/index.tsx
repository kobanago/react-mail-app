import { Button as MuiButton } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({
  label,
  clickHandler,
  linkFlg,
  to,
  ...props
}: ButtonProps) => {
  return linkFlg ? (
    <MuiButton component={Link} to={to} {...props}>
      {label}
      {props.children}
    </MuiButton>
  ) : (
    <MuiButton onClick={clickHandler} {...props}>
      {label}
      {props.children}
    </MuiButton>
  );
};

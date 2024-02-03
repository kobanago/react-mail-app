import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { FC, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

export type ButtonProps = MuiButtonProps & {
  label?: string;
  clickHandler?: (() => void) | MouseEventHandler<HTMLButtonElement>;
  linkFlg?: boolean;
  to?: string;
};

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

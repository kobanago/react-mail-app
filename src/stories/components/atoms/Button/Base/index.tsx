import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { FC, MouseEventHandler } from 'react';

export type ButtonProps = MuiButtonProps & {
  label?: string;
  clickHandler?: (() => void) | MouseEventHandler<HTMLButtonElement>;
};

export const Button: FC<ButtonProps> = ({
  label,
  clickHandler,
  ...props
}: ButtonProps) => (
  <MuiButton {...props} onClick={clickHandler}>
    {label}
    {props.children}
  </MuiButton>
);

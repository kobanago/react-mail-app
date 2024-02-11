import { ButtonProps as MuiButtonProps } from '@mui/material';
import { MouseEventHandler } from 'react';
export type ButtonProps = MuiButtonProps & {
  label?: string;
  clickHandler?: (() => void) | MouseEventHandler<HTMLButtonElement>;
  linkFlg?: boolean;
  to?: string;
};

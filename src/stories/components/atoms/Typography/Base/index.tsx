import { TypographyProps, Typography as MuiTypography } from '@mui/material';
import { FC } from 'react';

export const Typography: FC<TypographyProps> = ({ ...props }: TypographyProps) => (
  <MuiTypography {...props}>{props.children}</MuiTypography>
);

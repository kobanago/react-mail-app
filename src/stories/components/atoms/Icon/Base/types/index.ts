import { SvgIconProps } from '@mui/material';
import { ReactNode } from 'react';

export type CustomSvgIconProps = SvgIconProps & {
  icon: ReactNode;
};
export type IconProps = CustomSvgIconProps;

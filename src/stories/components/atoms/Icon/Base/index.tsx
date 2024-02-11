import { SvgIcon } from '@mui/material';
import { FC } from 'react';

import { CustomSvgIconProps, IconProps } from './types';

const CustomSvgIcon: FC<CustomSvgIconProps> = ({
  icon,
  ...props
}: CustomSvgIconProps) => <SvgIcon {...props}>{icon}</SvgIcon>;

export const Icon: FC<IconProps> = ({ icon, ...props }: IconProps) => (
  <CustomSvgIcon {...props} icon={icon} />
);

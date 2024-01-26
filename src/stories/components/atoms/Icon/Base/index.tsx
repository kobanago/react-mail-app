import { SvgIconProps, SvgIcon } from '@mui/material';
import { ReactNode, FC } from 'react';

export interface CustomSvgIconProps extends SvgIconProps {
  icon: ReactNode;
}
const CustomSvgIcon: FC<CustomSvgIconProps> = ({
  icon,
  ...props
}: CustomSvgIconProps) => <SvgIcon {...props}>{icon}</SvgIcon>;

export type IconProps = CustomSvgIconProps;
export const Icon: FC<IconProps> = ({ icon, ...props }: IconProps) => (
  <CustomSvgIcon {...props} icon={icon} />
);

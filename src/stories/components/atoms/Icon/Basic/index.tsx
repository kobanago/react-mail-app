import { FC } from 'react';

import { Icon as BaseIcon, IconProps } from '../Base';

export const Icon: FC<IconProps> = ({ icon }: IconProps) => {
  return <BaseIcon icon={icon} fontSize='large' />;
};

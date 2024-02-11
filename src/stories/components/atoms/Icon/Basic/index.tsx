import { FC } from 'react';

import { Icon as BaseIcon } from '../Base';
import { IconProps } from '../Base/types';

export const Icon: FC<IconProps> = ({ icon }: IconProps) => {
  return <BaseIcon icon={icon} fontSize='large' />;
};

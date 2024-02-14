import { FC } from 'react';

import { Button as BaseButton } from '../Base';
import { ButtonProps } from '../Base/types';

import theme from '@/stories/common/theme';

export const ButtonForIcon: FC<ButtonProps> = ({
  sx,
  label,
  disabled,
  clickHandler,
  children,
  linkFlg,
  to,
}: ButtonProps) => {
  return (
    <BaseButton
      variant='outlined'
      sx={{ padding: theme.spacing(1), margin: theme.spacing(1), ...sx }}
      label={label}
      disabled={disabled}
      clickHandler={clickHandler}
      linkFlg={linkFlg}
      to={to}
    >
      {children}
    </BaseButton>
  );
};

import { FC } from 'react';

import { Button as BaseButton } from '../Base';
import { ButtonProps } from '../Base/types';

import theme from '@/stories/common/theme';

export const Button: FC<ButtonProps> = ({
  sx,
  label,
  disabled,
  clickHandler,
  linkFlg,
  to,
  children,
}: ButtonProps) => {
  return (
    <BaseButton
      variant='contained'
      sx={{ padding: theme.spacing(2), margin: theme.spacing(2), ...sx }}
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

import { FC } from 'react';

import { Button as BaseButton, ButtonProps } from '../Base';

import theme from '@/stories/common/theme';

export const ButtonForIcon: FC<ButtonProps> = ({
  sx,
  label,
  disabled,
  clickHandler,
  children,
}: ButtonProps) => {
  return (
    <BaseButton
      variant='outlined'
      sx={{ padding: theme.spacing(1), margin: theme.spacing(1), ...sx }}
      label={label}
      disabled={disabled}
      clickHandler={clickHandler}
    >
      {children}
    </BaseButton>
  );
};

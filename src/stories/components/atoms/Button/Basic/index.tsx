import { FC } from 'react';

import { Button as BaseButton, ButtonProps } from '../Base';

import theme from '@/stories/common/theme';

export const Button: FC<ButtonProps> = ({
  sx,
  label,
  disabled,
  clickHandler,
  children,
}: ButtonProps) => {
  return (
    <BaseButton
      variant='contained'
      sx={{ padding: theme.spacing(2), margin: theme.spacing(2), ...sx }}
      label={label}
      disabled={disabled}
      clickHandler={clickHandler}
    >
      {children}
    </BaseButton>
  );
};

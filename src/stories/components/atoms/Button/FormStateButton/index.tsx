import { FC } from 'react';

import { FormStateButtonProps } from './types';
import { Button as BasicButton } from '../Basic';

import theme from '@/stories/common/theme';

export const FormStateButton: FC<FormStateButtonProps> = ({
  processing,
  disabled,
  label,
  clickHandler,
}: FormStateButtonProps) => {
  return (
    <BasicButton
      sx={{ margin: theme.spacing(0.5), width: '30%' }}
      label={processing ? `${label} end?` : label}
      clickHandler={clickHandler}
      disabled={disabled}
    />
  );
};

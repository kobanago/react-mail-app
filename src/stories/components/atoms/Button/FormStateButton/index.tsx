import { FC } from 'react';

import { ButtonProps } from '../Base';
import { Button as BasicButton } from '../Basic';

import theme from '@/stories/common/theme';

export type FormStateButtonProps = ButtonProps & {
  processing: boolean;
};

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

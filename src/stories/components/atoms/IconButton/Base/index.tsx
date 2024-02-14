import { FC } from 'react';

import { IconButtonProps } from './types';
import { ButtonForIcon } from '../../Button/ButtonForIcon';
import { Icon } from '../../Icon/Basic';
import { Typography } from '../../Typography/Base';

import theme from '@/stories/common/theme';

export const IconButton: FC<IconButtonProps> = ({
  icon,
  clickHandler,
  label,
  disabled,
  linkFlg,
  to,
  ...props
}: IconButtonProps) => {
  return (
    <ButtonForIcon
      {...props}
      clickHandler={clickHandler}
      disabled={disabled}
      linkFlg={linkFlg}
      to={to}
    >
      <Icon fontSize='large' icon={icon} />
      <Typography variant='body1' color={theme.palette.text.primary} align='right'>
        {`\u00a0\u00a0${label}`}
      </Typography>
    </ButtonForIcon>
  );
};

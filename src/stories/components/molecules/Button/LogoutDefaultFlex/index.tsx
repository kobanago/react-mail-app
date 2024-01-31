import { FC } from 'react';

import { FlexBox } from '@/stories/components/atoms/Box/FlexBox';
import { BackButton } from '@/stories/components/atoms/Button/BackButton';
import {
  LogoutButton,
  LogoutButtonProps,
} from '@/stories/components/atoms/IconButton/LogoutButton';

export type LogoutDefaultFlexType = LogoutButtonProps;
export const LogoutDefaultFlex: FC<LogoutDefaultFlexType> = ({
  logoutHandler,
}: LogoutDefaultFlexType) => {
  return (
    <FlexBox>
      <BackButton />
      <LogoutButton logoutHandler={logoutHandler} />
    </FlexBox>
  );
};

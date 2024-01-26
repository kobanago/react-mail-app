import LogoutIcon from '@mui/icons-material/Logout';
import { FC } from 'react';

import { FlexBox } from '@/stories/components/atoms/Box/FlexBox';
import { BackButton } from '@/stories/components/atoms/Button/BackButton';
import { IconButton, IconButtonProps } from '@/stories/components/atoms/IconButton/Base';

export interface LogoutDefaultFlexType extends IconButtonProps {
  authHandler: () => void;
}
export const LogoutDefaultFlex: FC<LogoutDefaultFlexType> = ({
  authHandler,
}: LogoutDefaultFlexType) => {
  return (
    <FlexBox>
      <BackButton />
      <IconButton icon={<LogoutIcon />} clickHandler={authHandler} label={'logout'} />
    </FlexBox>
  );
};

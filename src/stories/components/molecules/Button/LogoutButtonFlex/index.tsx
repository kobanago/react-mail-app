import EditNoteIcon from '@mui/icons-material/EditNote';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { FC } from 'react';

import { FlexBox } from '@/stories/components/atoms/Box/FlexBox';
import { IconButton, IconButtonProps } from '@/stories/components/atoms/IconButton/Base';

export type LogoutButtonFlexProps = IconButtonProps & {
  dataExistFlg: boolean;
  authHandler: () => void;
};

export const LogoutButtonFlex: FC<LogoutButtonFlexProps> = ({
  dataExistFlg,
  authHandler,
}: LogoutButtonFlexProps) => {
  return (
    <FlexBox>
      {dataExistFlg && (
        <IconButton icon={<EditNoteIcon />} href='/message' label={'edit message'} />
      )}
      <IconButton icon={<PersonAddIcon />} href='/person' label={'edit person'} />
      <IconButton icon={<LogoutIcon />} clickHandler={authHandler} label={'logout'} />
    </FlexBox>
  );
};

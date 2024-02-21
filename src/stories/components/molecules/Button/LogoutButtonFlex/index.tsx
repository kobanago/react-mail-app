import EditNoteIcon from '@mui/icons-material/EditNote';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { FC } from 'react';

import { LogoutButtonFlexProps } from './types';

import { useUserDataStore } from '@/stories/common/stores';
import { FlexBox } from '@/stories/components/atoms/Box/FlexBox';
import { IconButton } from '@/stories/components/atoms/IconButton/Base';
import { LogoutButton } from '@/stories/components/atoms/IconButton/LogoutButton';
import { RegisterButton } from '@/stories/components/atoms/IconButton/RegisterButton';

export const LogoutButtonFlex: FC<LogoutButtonFlexProps> = ({
  dataExistFlg,
}: LogoutButtonFlexProps) => {
  const { userData } = useUserDataStore((state) => ({ userData: state.userData }));
  return (
    <FlexBox>
      {userData ? (
        <>
          {dataExistFlg && (
            <IconButton icon={<EditNoteIcon />} to='/message' label={'edit message'} />
          )}
          <IconButton icon={<PersonAddIcon />} to='/person' label={'edit person'} />
        </>
      ) : (
        <RegisterButton />
      )}
      <LogoutButton />
    </FlexBox>
  );
};

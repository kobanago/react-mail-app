import EditNoteIcon from '@mui/icons-material/EditNote';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { FC, useContext } from 'react';

import { SetUserDataContext } from '@/stories/common/context';
import { FlexBox } from '@/stories/components/atoms/Box/FlexBox';
import { IconButton } from '@/stories/components/atoms/IconButton/Base';
import { LogoutButton } from '@/stories/components/atoms/IconButton/LogoutButton';
import { RegisterButton } from '@/stories/components/atoms/IconButton/RegisterButton';

export type LogoutButtonFlexProps = {
  dataExistFlg: boolean;
};

export const LogoutButtonFlex: FC<LogoutButtonFlexProps> = ({
  dataExistFlg,
}: LogoutButtonFlexProps) => {
  const { userData } = useContext(SetUserDataContext) ?? {};
  return (
    <FlexBox>
      {userData ? (
        <>
          {dataExistFlg && (
            <IconButton
              icon={<EditNoteIcon />}
              to='/message'
              label={'edit message'}
              linkFlg={true}
            />
          )}
          <IconButton
            icon={<PersonAddIcon />}
            to='/person'
            label={'edit person'}
            linkFlg={true}
          />
        </>
      ) : (
        <RegisterButton />
      )}
      <LogoutButton />
    </FlexBox>
  );
};

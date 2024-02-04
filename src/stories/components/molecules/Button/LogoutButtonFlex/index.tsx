import EditNoteIcon from '@mui/icons-material/EditNote';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { FC } from 'react';

import { FlexBox } from '@/stories/components/atoms/Box/FlexBox';
import { IconButton } from '@/stories/components/atoms/IconButton/Base';
import { LogoutButton } from '@/stories/components/atoms/IconButton/LogoutButton';

export type LogoutButtonFlexProps = {
  dataExistFlg: boolean;
};

export const LogoutButtonFlex: FC<LogoutButtonFlexProps> = ({
  dataExistFlg,
}: LogoutButtonFlexProps) => {
  return (
    <FlexBox>
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
      <LogoutButton />
    </FlexBox>
  );
};

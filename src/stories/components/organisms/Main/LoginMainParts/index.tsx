import { useContext } from 'react';

import { SetPersonListContext, SetUserDataContext } from '@/stories/common/context';
import { Box } from '@/stories/components/atoms/Box/Basic/';
import { LoginButton } from '@/stories/components/atoms/IconButton/LoginButton';
import { BodySubText } from '@/stories/components/atoms/Typography/BodySubText';
import { LogoutButtonFlex } from '@/stories/components/molecules/Button/LogoutButtonFlex';
import { PersonList } from '@/stories/components/molecules/List/PersonList';

export const LoginMainParts = () => {
  const { personList } = useContext(SetPersonListContext) ?? {};
  const { userData } = useContext(SetUserDataContext) ?? {};
  return (
    <Box>
      {userData ? (
        personList && personList.length ? (
          <Box>
            <PersonList />
            <LogoutButtonFlex dataExistFlg={true} />
          </Box>
        ) : (
          <Box>
            <BodySubText>no data</BodySubText>
            <LogoutButtonFlex dataExistFlg={false} />
          </Box>
        )
      ) : (
        <LoginButton />
      )}
    </Box>
  );
};

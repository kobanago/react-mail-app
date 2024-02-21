import { useContext } from 'react';

import { SetPersonListContext } from '@/stories/common/context';
import { useUserDataStore } from '@/stories/common/stores';
import { Box } from '@/stories/components/atoms/Box/Basic/';
import { LoginButton } from '@/stories/components/atoms/IconButton/LoginButton';
import { BodySubText } from '@/stories/components/atoms/Typography/BodySubText';
import { LogoutButtonFlex } from '@/stories/components/molecules/Button/LogoutButtonFlex';
import { PersonList } from '@/stories/components/molecules/List/PersonList';

export const LoginMainParts = () => {
  const { personList } = useContext(SetPersonListContext) ?? {};
  const { userData } = useUserDataStore((state) => ({ userData: state.userData }));
  return (
    <Box>
      {personList && personList.length ? (
        <Box>
          <PersonList />
          <LogoutButtonFlex dataExistFlg={true} />
        </Box>
      ) : userData !== undefined ? (
        <Box>
          <BodySubText>no data</BodySubText>
          <LogoutButtonFlex dataExistFlg={false} />
        </Box>
      ) : (
        <LoginButton />
      )}
    </Box>
  );
};

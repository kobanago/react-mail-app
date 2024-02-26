import { useShallow } from 'zustand/react/shallow';

import { usePersonListStore, useUserDataStore } from '@/stories/common/stores';
import { Box } from '@/stories/components/atoms/Box/Basic/';
import { LoginButton } from '@/stories/components/atoms/IconButton/LoginButton';
import { BodySubText } from '@/stories/components/atoms/Typography/BodySubText';
import { LogoutButtonFlex } from '@/stories/components/molecules/Button/LogoutButtonFlex';
import { PersonList } from '@/stories/components/molecules/List/PersonList';

export const LoginMainParts = () => {
  const { personList } = usePersonListStore(
    useShallow((state) => ({
      personList: state.personList,
    })),
  );
  const { userData } = useUserDataStore(
    useShallow((state) => ({ userData: state.userData })),
  );
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

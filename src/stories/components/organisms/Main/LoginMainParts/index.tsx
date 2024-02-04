import { FC } from 'react';

import { AddressListType } from '@/stories/common/types';
import { Box } from '@/stories/components/atoms/Box/Basic/';
import { LoginButton } from '@/stories/components/atoms/IconButton/LoginButton';
import { BodySubText } from '@/stories/components/atoms/Typography/BodySubText';
import { LogoutButtonFlex } from '@/stories/components/molecules/Button/LogoutButtonFlex';
import { PersonList } from '@/stories/components/molecules/List/PersonList';

export type LoginMainPartsProps = {
  authFlg: boolean;
  data: AddressListType | undefined;
};

export const LoginMainParts: FC<LoginMainPartsProps> = ({
  authFlg,
  data,
}: LoginMainPartsProps) => {
  return (
    <Box>
      {authFlg ? (
        data && Object.keys(data).length ? (
          <Box>
            <PersonList data={data} />
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

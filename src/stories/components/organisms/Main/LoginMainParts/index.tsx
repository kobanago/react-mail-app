import { FC } from 'react';

import theme from '@/stories/common/theme';
import { AddressListType } from '@/stories/common/types';
import { Box } from '@/stories/components/atoms/Box/Basic/';
import { LoginButton } from '@/stories/components/atoms/IconButton/LoginButton';
import { Typography } from '@/stories/components/atoms/Typography/Base/';
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
  const authHandler = () => {};
  return (
    <Box>
      {authFlg ? (
        data && Object.keys(data).length ? (
          <Box>
            <PersonList data={data} />
            <LogoutButtonFlex dataExistFlg={true} authHandler={() => authHandler()} />
          </Box>
        ) : (
          <Box>
            <Typography
              variant='body2'
              color={theme.palette.text.primary}
              align='center'
              sx={{ margin: theme.spacing(2) }}
            >
              no data
            </Typography>
            <LogoutButtonFlex dataExistFlg={false} authHandler={() => authHandler()} />
          </Box>
        )
      ) : (
        <LoginButton clickHandler={() => authHandler()} />
      )}
    </Box>
  );
};

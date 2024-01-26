import { FC } from 'react';

import { Box } from '@/stories/components/atoms/Box/Basic';
import {
  LogoutDefaultFlex,
  LogoutDefaultFlexType,
} from '@/stories/components/molecules/Button/LogoutDefaultFlex';
import {
  PersonForm,
  PersonFormType,
} from '@/stories/components/molecules/Form/PersonForm';

export type PersonFormsType = PersonFormType & LogoutDefaultFlexType;
export const PersonForms: FC<PersonFormsType> = ({
  processResultFunc,
  authHandler,
}: PersonFormsType) => {
  return (
    <Box>
      <PersonForm processResultFunc={processResultFunc} />
      <LogoutDefaultFlex authHandler={authHandler} />
    </Box>
  );
};

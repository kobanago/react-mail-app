import { FC } from 'react';

import { Box } from '@/stories/components/atoms/Box/Basic';
import {
  LogoutDefaultFlex,
  LogoutDefaultFlexType,
} from '@/stories/components/molecules/Button/LogoutDefaultFlex';
import { Form, FormType } from '@/stories/components/molecules/Form/PersonForm';

export type PersonFormsType = FormType & LogoutDefaultFlexType;
export const PersonForms: FC<PersonFormsType> = ({
  processResultFunc,
  authHandler,
}: PersonFormsType) => {
  return (
    <Box>
      <Form processResultFunc={processResultFunc} />
      <LogoutDefaultFlex authHandler={authHandler} />
    </Box>
  );
};

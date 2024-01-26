import { FC } from 'react';

import { PersonForms } from '../../Forms/PersonForms';

import { AddressListType } from '@/stories/common/types';
import { Box } from '@/stories/components/atoms/Box/Basic';
import { Button } from '@/stories/components/atoms/Button/Basic';
import { BodySubText } from '@/stories/components/atoms/Typography/BodySubText';
import { PersonList } from '@/stories/components/molecules/List/PersonList';

export type EditMainPartsProps = {
  data: AddressListType;
};

export const EditMainParts: FC<EditMainPartsProps> = ({ data }: EditMainPartsProps) => {
  const registerClickHandler = () => {};

  return data ? (
    <Box>
      {Object.keys(data).length ? (
        <PersonList data={data} />
      ) : (
        <BodySubText>no data</BodySubText>
      )}
      <PersonForms processResultFunc={() => {}} authHandler={() => {}} />
    </Box>
  ) : (
    <Box>
      <BodySubText>please user register!</BodySubText>
      <Button label={'register'} disabled={false} clickHandler={registerClickHandler} />
    </Box>
  );
};

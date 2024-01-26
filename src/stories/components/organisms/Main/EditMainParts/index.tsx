import { FC } from 'react';

import { PersonForms } from '../../Forms/PersonForms';

import theme from '@/stories/common/theme';
import { AddressListType } from '@/stories/common/types';
import { Box } from '@/stories/components/atoms/Box/Basic';
import { Button } from '@/stories/components/atoms/Button/Basic';
import { Typography } from '@/stories/components/atoms/Typography/Base';
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
        <Typography
          variant='body2'
          color={theme.palette.text.primary}
          align='center'
          sx={{ padding: theme.spacing(2) }}
        >
          no data
        </Typography>
      )}
      <PersonForms processResultFunc={() => {}} authHandler={() => {}} />
    </Box>
  ) : (
    <Box>
      <Typography variant='body2' color={theme.palette.text.primary} align='center'>
        {'please user register!'}
      </Typography>
      <Button label={'register'} disabled={false} clickHandler={registerClickHandler} />
    </Box>
  );
};

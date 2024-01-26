import { FC, useState } from 'react';

import { MessageForms } from '../../Forms/MessageForms';
import { LogsMainParts } from '../LogsMainParts';

import { SelectedPersonIdContext } from '@/stories/common/context';
import { AddressListType } from '@/stories/common/types';
import { Box } from '@/stories/components/atoms/Box/Basic';
import { LogoutDefaultFlex } from '@/stories/components/molecules/Button/LogoutDefaultFlex';

export type SendMainPartsProps = {
  data: AddressListType;
};

export const SendMainParts: FC<SendMainPartsProps> = ({ data }: SendMainPartsProps) => {
  const [personId, setPersonId] = useState('');
  const selectedPersonId = (newState: string) => {
    setPersonId(newState);
  };

  return (
    <SelectedPersonIdContext.Provider value={selectedPersonId}>
      <Box>
        <MessageForms data={data} authHandler={() => {}} />
        <LogsMainParts personId={personId} data={data} />
        <LogoutDefaultFlex authHandler={() => {}} />
      </Box>
    </SelectedPersonIdContext.Provider>
  );
};

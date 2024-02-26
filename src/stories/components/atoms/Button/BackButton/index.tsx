import { FC } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { Button as BasicButton } from '../Basic';

import { usePersonDataStore } from '@/stories/common/stores';

export const BackButton: FC = () => {
  const { resetPersonData } = usePersonDataStore(
    useShallow((state) => ({
      resetPersonData: state.resetPersonData,
    })),
  );
  return (
    <BasicButton
      label={'go back'}
      disabled={false}
      to='/'
      clickHandler={() => {
        resetPersonData();
      }}
    />
  );
};

import { FC } from 'react';

import { Button as BasicButton } from '../Basic';

import { usePersonDataStore } from '@/stories/common/stores';

export const BackButton: FC = () => {
  const { resetPersonData } = usePersonDataStore((state) => ({
    resetPersonData: state.resetPersonData,
  }));
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

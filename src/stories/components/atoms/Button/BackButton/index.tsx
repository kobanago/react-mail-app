import { FC, useContext } from 'react';

import { Button as BasicButton } from '../Basic';

import { SetPersonDataContext } from '@/stories/common/context';

export const BackButton: FC = () => {
  const { personDataDispatch } = useContext(SetPersonDataContext) ?? {};
  return (
    <BasicButton
      label={'go back'}
      disabled={false}
      linkFlg={true}
      to='/'
      clickHandler={() => {
        personDataDispatch && personDataDispatch({ type: 'RESET', payload: undefined });
      }}
    />
  );
};

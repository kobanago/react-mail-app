import { FC } from 'react';

import { Button as BasicButton } from '../Basic';

export const BackButton: FC = () => {
  return <BasicButton label={'go back'} disabled={false} linkFlg={true} to='/' />;
};

import { FC } from 'react';

import { Select as BaseSelect } from '../Base';
import { SelectProps } from '../Base/types';

export const Select: FC<SelectProps> = ({ selectHandler }: SelectProps) => {
  return <BaseSelect selectHandler={selectHandler} />;
};

import { FC } from 'react';

import { Select as BaseSelect, SelectProps } from '../Base';

export const Select: FC<SelectProps> = ({
  selectHandler,
  data,
  ...props
}: SelectProps) => {
  return <BaseSelect selectHandler={selectHandler} data={data} {...props} />;
};

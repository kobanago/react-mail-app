import {
  SelectProps as MuiSelectProps,
  Select as MuiSelect,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { FC, useContext } from 'react';

import { SetPersonListContext } from '@/stories/common/context';

export type SelectProps = Omit<MuiSelectProps, 'onChange'> & {
  selectHandler?: (event: SelectChangeEvent<unknown>) => void;
};
export const Select: FC<SelectProps> = ({ selectHandler, ...props }: SelectProps) => {
  const { personList } = useContext(SetPersonListContext) ?? {};
  return (
    <MuiSelect {...props} onChange={selectHandler} autoWidth={true}>
      {personList &&
        personList.length &&
        personList.map((item, index) => (
          <MenuItem key={index} value={item.id}>
            {`${item.person_display_name ? item.person_display_name : item.name} (${item.mail})`}
          </MenuItem>
        ))}
    </MuiSelect>
  );
};

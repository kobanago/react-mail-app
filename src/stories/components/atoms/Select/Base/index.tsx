import {
  SelectProps as MuiSelectProps,
  Select as MuiSelect,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { FC } from 'react';

import { AddressListType } from '@/common/types';

export interface SelectProps extends Omit<MuiSelectProps, 'onChange'> {
  selectHandler?: (event: SelectChangeEvent<unknown>) => void;
  data: AddressListType;
}
export const Select: FC<SelectProps> = ({
  selectHandler,
  data,
  ...props
}: SelectProps) => (
  <MuiSelect {...props} onChange={selectHandler} autoWidth={true} required>
    {Object.keys(data).map((key, index) => {
      const item = data[key];
      return (
        <MenuItem key={index} value={item.userId}>
          {`${item.name} (${item.mail})`}
        </MenuItem>
      );
    })}
  </MuiSelect>
);

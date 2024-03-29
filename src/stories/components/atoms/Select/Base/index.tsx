import { Select as MuiSelect, MenuItem, MenuListProps } from '@mui/material';
import { FC } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { SelectProps } from './types';

import { usePersonListStore } from '@/stories/common/stores';

export const Select: FC<SelectProps> = ({ selectHandler, ...props }: SelectProps) => {
  const { personList } = usePersonListStore(
    useShallow((state) => ({
      personList: state.personList,
    })),
  );

  return (
    <MuiSelect
      {...props}
      onChange={selectHandler}
      autoWidth={true}
      data-testid='select'
      MenuProps={{
        disablePortal: true,
        MenuListProps: {
          'data-testid': 'select-options',
        } as MenuListProps,
      }}
    >
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

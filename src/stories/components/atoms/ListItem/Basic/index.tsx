import { FC } from 'react';

import { ListItem as BaseListItem, ListItemProps } from '../Base';

import theme from '@/stories/common/theme';

export const ListItem: FC<ListItemProps> = ({
  selectHandler,
  children,
  ...props
}: ListItemProps) => {
  return (
    <BaseListItem
      sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}
      selectHandler={selectHandler}
      {...props}
    >
      {children}
    </BaseListItem>
  );
};

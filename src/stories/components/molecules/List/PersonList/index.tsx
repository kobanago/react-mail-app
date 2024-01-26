import { FC } from 'react';

import { AddressListType } from '@/stories/common/types';
import { List } from '@/stories/components/atoms/List/Base';
import { ListItemProps as CommonListItemProps } from '@/stories/components/atoms/ListItem/Base';
import { PersonListItem } from '@/stories/components/molecules/ListItem/PersonListItem';

export interface PersonListProp extends CommonListItemProps {
  data: AddressListType;
}
export const PersonList: FC<PersonListProp> = ({ data }) => {
  return (
    <List sx={{ width: 'auto', bgcolor: 'background.paper' }}>
      {Object.keys(data).map((key, index) => {
        const item = data[key];
        return (
          <PersonListItem
            key={index}
            id={item.id}
            message={`${item.name} (${item.mail})`}
          />
        );
      })}
    </List>
  );
};

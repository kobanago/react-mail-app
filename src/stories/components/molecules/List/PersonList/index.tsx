import { FC } from 'react';

import { PersonListProps } from './types';

import { usePersonListStore } from '@/stories/common/stores';
import { List } from '@/stories/components/atoms/List/Base';
import { PersonListItem } from '@/stories/components/molecules/ListItem/PersonListItem';

export const PersonList: FC<PersonListProps> = ({ selectHandler }: PersonListProps) => {
  const { personList } = usePersonListStore((state) => ({
    personList: state.personList,
  }));

  return (
    <List sx={{ width: 'auto', bgcolor: 'background.paper' }}>
      {personList &&
        personList.map((item, index) => (
          <PersonListItem
            selectHandler={selectHandler}
            key={index}
            id={item.id.toString()}
            message={`${item.person_display_name ? item.person_display_name : item.name} (${item.mail})`}
          />
        ))}
    </List>
  );
};

import { FC } from 'react';

import { LogsListProp } from './types';
import { LogsListItem } from '../../ListItem/LogsListItem';

import { List } from '@/stories/components/atoms/List/Base';

export const LogsList: FC<LogsListProp> = ({ messageLog }: LogsListProp) => {
  return (
    <List sx={{ maxHeight: '300px', overflowY: 'auto' }}>
      {messageLog.map((item, index) => (
        <LogsListItem item={item} key={index} />
      ))}
    </List>
  );
};

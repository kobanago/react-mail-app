import { FC } from 'react';

import { LogsListItem } from '../../ListItem/LogsListItem';

import { MessageContentsType } from '@/stories/common/types';
import { List } from '@/stories/components/atoms/List/Base';

export type LogsListProp = {
  messageLog: MessageContentsType[];
};

export const LogsList: FC<LogsListProp> = ({ messageLog }: LogsListProp) => {
  return (
    <List sx={{ maxHeight: '300px', overflowY: 'auto' }}>
      {messageLog.map((item, index) => (
        <LogsListItem item={item} key={index} />
      ))}
    </List>
  );
};

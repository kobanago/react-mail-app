import { MessageType } from '@/stories/common/types/db';
import { ListItemProps } from '@/stories/components/atoms/ListItem/Base/types';

export type LogsListItemProps = ListItemProps & {
  item: MessageType;
};

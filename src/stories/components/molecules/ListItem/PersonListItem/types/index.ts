import { ListItemProps } from '@/stories/components/atoms/ListItem/Base/types';

export type PersonListItemProps = ListItemProps & {
  id: string;
  message: string;
};

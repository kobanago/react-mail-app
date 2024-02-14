import { ButtonProps } from '@/stories/components/atoms/Button/Base/types';

export type SendStateButtonType = ButtonProps & {
  keepHandler: () => void;
  sendHandler: () => void;
};

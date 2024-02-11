import { ButtonProps } from '@/stories/components/atoms/Button/Base/types';

export type IconButtonProps = ButtonProps & {
  icon?: React.ReactNode;
  label?: string;
  disabled?: boolean;
};

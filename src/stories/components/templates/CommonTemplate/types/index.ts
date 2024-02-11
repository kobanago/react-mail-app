import { TitleProps } from '@/stories/components/molecules/Title/types';

export type CommonTemplateProps = TitleProps;
export type GetComponentProps = CommonTemplateProps & {
  padding: number;
  component: React.ReactNode;
};

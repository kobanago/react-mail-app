import { FC } from 'react';

import { useCommonFunction } from './hooks';
import { CommonTemplateProps } from './types';
import { Title } from '../../molecules/Title';

import theme from '@/stories/common/theme';
import { Container } from '@/stories/components/atoms/Container/Basic';

export const CommonTemplate: FC<CommonTemplateProps> = ({
  title,
}: CommonTemplateProps) => {
  const data = useCommonFunction(title);
  return (
    <Container
      sx={{
        padding: theme.spacing(data.padding),
      }}
    >
      <Title title={data.title} />
      {data.component}
    </Container>
  );
};

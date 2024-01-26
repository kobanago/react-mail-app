import { ContainerProps, Container as MuiContainer } from '@mui/material';
import { FC } from 'react';

export const Container: FC<ContainerProps> = ({ ...props }: ContainerProps) => (
  <MuiContainer {...props}>{props.children}</MuiContainer>
);

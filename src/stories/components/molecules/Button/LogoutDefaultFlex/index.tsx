import { FlexBox } from '@/stories/components/atoms/Box/FlexBox';
import { BackButton } from '@/stories/components/atoms/Button/BackButton';
import { LogoutButton } from '@/stories/components/atoms/IconButton/LogoutButton';

export const LogoutDefaultFlex = () => {
  return (
    <FlexBox>
      <BackButton />
      <LogoutButton />
    </FlexBox>
  );
};

import { Box } from '@/stories/components/atoms/Box/Basic';
import { LogoutDefaultFlex } from '@/stories/components/molecules/Button/LogoutDefaultFlex';
import { PersonForm } from '@/stories/components/molecules/Form/PersonForm';

export const PersonForms = () => {
  return (
    <Box>
      <PersonForm />
      <LogoutDefaultFlex />
    </Box>
  );
};

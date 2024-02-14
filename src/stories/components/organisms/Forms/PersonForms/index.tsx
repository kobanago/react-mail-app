import React from 'react';

import { Box } from '@/stories/components/atoms/Box/Basic';
import { LogoutDefaultFlex } from '@/stories/components/molecules/Button/LogoutDefaultFlex';
import { PersonForm } from '@/stories/components/molecules/Form/PersonForm';

export const PersonForms = React.memo(function personForm() {
  return (
    <Box>
      <PersonForm />
      <LogoutDefaultFlex />
    </Box>
  );
});

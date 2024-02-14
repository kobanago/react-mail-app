import type { Preview } from '@storybook/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { initialize, mswLoader } from 'storybook-msw-addon';
import { initMocks } from '../mocks/index';
import { handlers } from 'mocks/handlers';

// Initialize MSW
initialize();
initMocks();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    decorators: [
      withThemeFromJSXProvider({
        Provider: ThemeProvider,
        GlobalStyles: CssBaseline,
      }),
    ],
    parameters: {
      msw: {
        handlers: handlers,
      },
    },
    loaders: [mswLoader],
  },
};

export default preview;

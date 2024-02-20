import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    allVariants: {
      color: '#ffffff !important',
    },
  },
});

export default darkTheme;

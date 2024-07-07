'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: 'linear-gradient(to right bottom, #430089, #82ffa1)',
      paper: 'linear-gradient(to right bottom, #430089, #82ffa1)',
    }
  },
  typography: {
    // TODO figure out which font to use
    fontFamily: [
        // 'Futura',
        // 'gt planar',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
'use client';
import { createTheme } from '@mui/material/styles';
// import { Roboto } from 'next/font/google';

// const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

const theme = createTheme({
  palette: {
    mode: 'light',
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
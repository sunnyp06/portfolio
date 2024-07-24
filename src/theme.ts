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

// set the min height of the box containing the header to be slightly larger so contents do not shift on typewriter effect
const h1Rem = String(theme.typography.h1.fontSize);
export const headingMinHeight = `${Number(h1Rem.substring(0, h1Rem.indexOf("rem"))) + 1}rem`;

export default theme;
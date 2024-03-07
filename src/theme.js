import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


// Create a theme instance.
const theme = createTheme({
  palette: {
    // primary: {
    //   main: '#556cd6',
    // },
    // secondary: {
    //   main: '#19857b',
    // },
     primary: {
      main: '#19747E',
    },
    secondary: {
      main: '#A9D6E5',
    },
    error: {
      main: red.A400,
    },
    info:{
      main: '#D1E8E2'
    },
    background: {
      default: '#E2E2E2'
    },
    mode: 'light'
  },
});

export default theme;
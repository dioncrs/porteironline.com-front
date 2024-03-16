import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#13807f',
    },
    secondary: {
      main: '#6e221f',
    },
    info: {
      main: '#1e577b',
    },
  },
});

export default theme;
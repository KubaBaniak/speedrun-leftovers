import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#43A047',
    },
    text: {
      primary: '#000000DE',
      secondary: '#00000099',
      disabled: '#00000061;',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'Open-sans'].join(','),
  },
});

export default theme;

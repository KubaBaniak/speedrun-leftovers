import { createTheme } from '@mui/material/styles';
import LinkBehaviour from '../components/overrides/RouterLink';
import { LinkProps } from '@mui/material/Link';

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehaviour,
      } as LinkProps,
      styleOverrides: {
        root: {
          textDecorationLine: 'none',
          color: 'inherit',
        },
      },
    },
  },
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

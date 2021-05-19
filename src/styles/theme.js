import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import typography from './typography';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#624185',
    },
    secondary: {
      main: '#A5A1A1',
    },
    text: {
      primary: '#000',
      secondary: '#484848',
      main: '#A5A1A1',
      white: '#fff'
    },
    button: {
      default: '#624185',
      hover: '#472151',
      visited: '#BF9B30',
    },
    gold: {
      main: '#FFDC73'
    },
    mobile_header: {
      main: '#624185',
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: '#FF9800'
    },
    background: {
      default: '#fff',
    },
  },
  typography
});

export default theme;

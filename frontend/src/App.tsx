import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './providers/theme';
import router from './providers/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

import { RouterProvider } from 'react-router-dom';
import theme from './providers/theme';
import router from './providers/routes';
import ThemeProvider from '@mui/system/ThemeProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

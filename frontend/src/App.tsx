import { RouterProvider } from 'react-router-dom';
import theme from './providers/theme';
import router from './providers/routes';
import ThemeProvider from '@mui/system/ThemeProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import networkSettings from './utils/network'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={networkSettings.queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

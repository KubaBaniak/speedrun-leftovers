import axios from 'axios';
import { QueryClient } from '@tanstack/react-query';
import { STALE_TIME_MIN } from '../contants/constants';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: STALE_TIME_MIN,
    },
  },
});

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default { queryClient, apiClient };

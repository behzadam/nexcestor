import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';

export const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          refetchOnWindowFocus: false,
          useErrorBoundary: true,
          staleTime: 5000
        }
      }
    })
);

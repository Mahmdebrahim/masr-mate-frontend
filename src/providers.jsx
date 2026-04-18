// src/app/providers.jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 1000, // 5 دقايق
      refetchOnWindowFocus: false,
    },
  },
});

export function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
        {" "}
        {children}
    </QueryClientProvider>
  );
}

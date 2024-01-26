import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { NotificationsPage } from './components/pages/NotificationsPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NotificationsPage />
    </QueryClientProvider>
  )
}

// eslint-disable-next-line import/no-default-export
export default App

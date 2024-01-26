import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { HomePage } from './components/pages/HomePage'

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
      <HomePage />
    </QueryClientProvider>
  )
}

// eslint-disable-next-line import/no-default-export
export default App

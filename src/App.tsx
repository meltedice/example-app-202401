import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotificationDetailPage } from './components/pages/NotificationDetailPage'
import { NotificationsPage } from './components/pages/NotificationsPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/notifications" />,
  },
  {
    path: '/notifications',
    element: <NotificationsPage />,
  },
  {
    path: '/notifications/:notificationId',
    element: <NotificationDetailPage />,
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

// eslint-disable-next-line import/no-default-export
export default App

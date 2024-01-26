import { useQuery } from '@tanstack/react-query'

export interface Notification {
  id: string
  title: string
  read: boolean
}

interface GetNotificationsResponse {
  notifications: Notification[]
}

export function useGetNotifications() {
  const { data, isLoading, error } = useQuery<
    unknown,
    Error,
    GetNotificationsResponse
  >({
    queryKey: ['GET_NOTIFICATIONS'],
    queryFn: async () => {
      const res = await fetch('/notifications')
      return res.json()
    },
  })
  const { notifications } = data ?? { notifications: [] }

  return { notifications, isLoading, error }
}

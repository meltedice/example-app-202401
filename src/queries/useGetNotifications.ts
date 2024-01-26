import { useQuery } from '@tanstack/react-query'

export interface Notification {
  id: string
  read: boolean
  title: string
}

export function useGetNotifications() {
  const { data, isLoading, error } = useQuery<unknown, Error, Notification>({
    queryKey: ['GET_NOTIFICATIONS'],
    queryFn: async () => {
      const res = await fetch('/notifications')
      return res.json()
    },
  })

  return { notifications: data, isLoading, error }
}

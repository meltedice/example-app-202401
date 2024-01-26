import { useQuery } from '@tanstack/react-query'

export interface NotificationDetail {
  id: string
  read: boolean
  title: string
  body: string
}

interface UseGetNotificationParams {
  id: string
}

export function useGetNotification({ id }: UseGetNotificationParams) {
  const { data, isLoading, error } = useQuery<
    unknown,
    Error,
    NotificationDetail
  >({
    queryKey: ['GET_NOTIFICATION'],
    queryFn: async () => {
      const res = await fetch(`/notifications/${id}`)
      return res.json()
    },
  })

  return { notification: data, isLoading, error }
}

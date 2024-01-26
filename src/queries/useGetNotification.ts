import { useQuery } from '@tanstack/react-query'

export interface NotificationDetail {
  id: string
  title: string
  body: string
  read: boolean
}

interface UseGetNotificationParams {
  id: string
}

interface GetNotificationResponse {
  notification: NotificationDetail
}

export function useGetNotification({ id }: UseGetNotificationParams) {
  const { data, isLoading, error } = useQuery<
    unknown,
    Error,
    GetNotificationResponse
  >({
    queryKey: ['GET_NOTIFICATION', { id }],
    queryFn: async () => {
      const res = await fetch(`/notifications/${id}`)
      return res.json()
    },
  })
  const { notification } = data ?? {}

  return {
    notification,
    isLoading,
    error,
  }
}

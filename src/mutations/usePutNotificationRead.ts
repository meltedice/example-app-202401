import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useCallback } from 'react'

interface UsePutNotificationReadVariables {
  id: string
  read: boolean
}

interface PutNotificationReadResponse {
  read: boolean
}

export function usePutNotificationRead() {
  const queryClient = useQueryClient()
  // useMutation の方は useQuery と違って、更新処理を呼び出す function を返します
  // 更新処理を呼び出す function を呼び出した時に初めて更新処理が走ります
  const { error, mutateAsync } = useMutation<
    PutNotificationReadResponse,
    Error,
    UsePutNotificationReadVariables
  >({
    mutationKey: ['PUT_NOTIFICATION_READ'],
    mutationFn: async ({ id, read }) => {
      const res = await fetch(`/notifications/${id}/read`, {
        method: 'PUT',
        body: JSON.stringify({ read }),
      })
      return res.json()
    },
    onSuccess: (_data, variables) => {
      // const notificationDetail = queryClient.getQueryData<NotificationDetail>([
      //   'GET_NOTIFICATION',
      //   { id: variables.id },
      // ])!
      // const updatedNotificationDetail: NotificationDetail = {
      //   ...notificationDetail,
      //   read: data.read,
      // }
      // queryClient.setQueryData(
      //   ['GET_NOTIFICATION', { id: variables.id }],
      //   // updatedNotificationDetail
      //   (notificationDetail) => {
      //     if (notificationDetail == null) {
      //       return notificationDetail
      //     }
      //     return {
      //       ...notificationDetail,
      //       read: data.read,
      //     }
      //   }
      // )
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      queryClient.invalidateQueries({
        queryKey: ['GET_NOTIFICATION', { id: variables.id }],
      })
    },
  })

  const updateNotificationRead = useCallback(
    async ({ id, read }: { id: string; read: boolean }) => {
      await mutateAsync({ id, read })
    },
    [mutateAsync]
  )

  return { error, updateNotificationRead }
}

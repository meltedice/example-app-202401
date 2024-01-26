import { useEffect, useRef } from 'react'
import { usePutNotificationRead } from '@/mutations/usePutNotificationRead'
import { useGetNotification } from '@/queries/useGetNotification'

interface UseGetNotificationAndMarkAsReadParams {
  id: string
}

export function useGetNotificationAndMarkAsRead({
  id,
}: UseGetNotificationAndMarkAsReadParams) {
  const didMarkAsRead = useRef(false)
  const { notification, isLoading, error } = useGetNotification({ id })
  const { updateNotificationRead } = usePutNotificationRead()

  useEffect(() => {
    if (didMarkAsRead.current === false) {
      didMarkAsRead.current = true
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      updateNotificationRead({ id, read: true })
    }
  })

  return {
    notification,
    isLoading,
    error,
  }
}

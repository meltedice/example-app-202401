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
  // これはお知らせの詳細を取得する API を呼び出していて、この取得が終わると notification に値が入り、isLoading は false になります
  const { notification, isLoading, error } = useGetNotification({ id })
  // これはお知らせを既読にする API を呼び出す function を返しています
  const { updateNotificationRead } = usePutNotificationRead()

  // useEffect() は第2引数の値が変わる度に呼び出されます
  useEffect(() => {
    // notification が undefined でまだお知らせの詳細が取得されていない時は何もしません
    if (notification == null) return
    // didMarkAsRead.current は以降の処理が1度しか実行されないようにするためのイディオムみたいなものです
    if (didMarkAsRead.current === false) {
      didMarkAsRead.current = true
      // notification が取得されたあとで既読にする API を呼び出します
      // ここではすでに既読でもかまわずに API を呼び出しています
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      updateNotificationRead({ id, read: true })
    }
  }, [id, notification, updateNotificationRead])

  return {
    notification,
    isLoading,
    error,
  }
}

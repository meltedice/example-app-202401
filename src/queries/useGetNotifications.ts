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
  // useQuery は特に指定しない限り、呼び出し時にデータの取得を開始します
  // なのでデータの取得が完了すると data に取得したデータが入ります
  // useGetNotifications() hook の戻り値が変わる度に、この hook を呼び出しているコンポーネントが再描画されます
  // 再描画 = コンポーネントの function が再度呼び出されます
  const { data, isLoading, error } = useQuery<
    unknown,
    Error,
    GetNotificationsResponse
  >({
    queryKey: ['GET_NOTIFICATIONS'],
    queryFn: async () => {
      // 色々と書いてありますがこの hook のメインの処理はここで API を呼び出してお知らせ一覧を取得しています
      // 他の処理は tanstack/react-query というライブラリを使って、API の呼び出し結果をキャッシュするためのものです
      const res = await fetch('/notifications')
      return res.json()
    },
  })
  const { notifications } = data ?? { notifications: [] }

  return { notifications, isLoading, error }
}

import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetNotifications } from '@/queries/useGetNotifications'

export function NotificationsPage() {
  const navigate = useNavigate()
  // ※ 簡略化のため ErrorBoundary や Suspense といった機能は使用せずに実装してあります
  // この useGetNotifications() の中でお知らせ一覧取得 API を呼び出しています
  // データ取得前は notifications は undefined, isLoading は true になります
  // データ取得後に notifications にはお知らせの配列が入り、isLoading は false になります
  // これらの値が変わる度にこのコンポーネントの function NotificationsPage() が呼び出されます
  const { notifications, isLoading } = useGetNotifications()
  const handleNotificationClick = useCallback(
    (notificationId: string) => {
      navigate(`/notifications/${notificationId}`)
    },
    [navigate]
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <ul>
        {notifications.map((notification) => {
          return (
            <li
              key={notification.id}
              onClick={() => handleNotificationClick(notification.id)}
            >
              {notification.id}: {notification.title} (
              {notification.read ? '既読' : '未読'})
            </li>
          )
        })}
      </ul>
    </div>
  )
}

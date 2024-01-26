import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetNotifications } from '@/queries/useGetNotifications'

export function NotificationsPage() {
  const navigate = useNavigate()
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

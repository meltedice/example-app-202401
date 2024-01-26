import { useGetNotifications } from '@/queries/useGetNotifications'

export function NotificationsPage() {
  const { notifications, isLoading } = useGetNotifications()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <ul>
        {notifications.map((notification) => {
          return <li key={notification.id}>{notification.title}</li>
        })}
      </ul>
    </div>
  )
}

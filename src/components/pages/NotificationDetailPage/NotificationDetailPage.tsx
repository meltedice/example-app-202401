import { Link, useParams } from 'react-router-dom'
import { useGetNotificationAndMarkAsRead } from '@/hooks/useGetNotificationAndMarkAsRead'

export function NotificationDetailPage() {
  const { notificationId } = useParams()
  const { notification, isLoading } = useGetNotificationAndMarkAsRead({
    id: notificationId!,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (notification == null) {
    return <div>Not found</div>
  }

  return (
    <div>
      <dl style={{ textAlign: 'left' }}>
        <dt>ID</dt>
        <dd>{notification.id}</dd>
        <dt>Title</dt>
        <dd>{notification.title}</dd>
        <dt>Body</dt>
        <dd>{notification.body}</dd>
        <dt>Read</dt>
        <dd>{notification.read ? '既読' : '未読'}</dd>
      </dl>
      <Link to="/notifications">Back</Link>
    </div>
  )
}

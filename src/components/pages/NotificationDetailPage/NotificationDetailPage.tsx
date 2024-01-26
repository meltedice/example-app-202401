import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { usePutNotificationRead } from '@/mutations/usePutNotificationRead'
import { useGetNotification } from '@/queries/useGetNotification'

export function NotificationDetailPage() {
  const { notificationId } = useParams()
  const { notification, isLoading } = useGetNotification({
    id: notificationId!,
  })
  const { updateNotificationRead } = usePutNotificationRead()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    updateNotificationRead({ id: notificationId!, read: true })
  }, [isLoading, notificationId, updateNotificationRead])

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
        <dd>{notification.read ? 'true' : 'false'}</dd>
      </dl>
      <Link to="/notifications">Back</Link>
    </div>
  )
}

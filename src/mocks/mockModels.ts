import { NotificationDetail } from '@/queries/useGetNotification'
import { Notification } from '@/queries/useGetNotifications'

export function buildNotificationMock(
  params: Partial<Notification>
): Notification {
  return {
    id: 'dummy-id-1',
    read: false,
    title: 'ダミータイトル',
    ...params,
  }
}

export function buildNotificationDetailMock(
  params: Partial<NotificationDetail>
): NotificationDetail {
  return {
    id: 'dummy-id-1',
    read: false,
    title: 'ダミータイトル',
    body: 'ダミーのお知らせ本文',
    ...params,
  }
}

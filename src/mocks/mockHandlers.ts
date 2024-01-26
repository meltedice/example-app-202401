import { HttpResponse, http } from 'msw'
import { Notification } from '@/queries/useGetNotifications'
import {
  buildNotificationDetailMock,
  buildNotificationMock,
} from './mockModels'

const mockNotifications: Notification[] = [
  buildNotificationMock({ id: 'dummy-id-4', title: 'ダミータイトル4' }),
  buildNotificationMock({ id: 'dummy-id-3', title: 'ダミータイトル3' }),
  buildNotificationMock({ id: 'dummy-id-2', title: 'ダミータイトル2' }),
  buildNotificationMock({
    id: 'dummy-id-1',
    title: 'ダミータイトル1',
    read: false,
  }),
]

export function buildGetNotificationsMockHandler() {
  return http.get('/notifications', () => {
    return HttpResponse.json({
      // notifications: [
      //   buildNotificationMock({ id: 'dummy-id-4', title: 'ダミータイトル4' }),
      //   buildNotificationMock({ id: 'dummy-id-3', title: 'ダミータイトル3' }),
      //   buildNotificationMock({ id: 'dummy-id-2', title: 'ダミータイトル2' }),
      //   buildNotificationMock({
      //     id: 'dummy-id-1',
      //     title: 'ダミータイトル1',
      //     read: false,
      //   }),
      // ],
      notifications: mockNotifications,
    })
  })
}

export function buildGetNotificationDetailMockHandler() {
  return http.get('/notifications/:notificationId', (req) => {
    const notificationId = req.params.notificationId as string
    const mockNotification = mockNotifications.find((notification) => {
      return notification.id === notificationId
    })

    if (mockNotification == null) {
      return HttpResponse.json({}, { status: 404 })
    }

    return HttpResponse.json({
      notification: buildNotificationDetailMock({
        ...mockNotification,
        body: `ダミーのお知らせの本文(${notificationId})`,
      }),
    })
  })
}

import { HttpResponse, http } from 'msw'
import {
  buildNotificationDetailMock,
  buildNotificationMock,
} from './mockModels'

export function buildGetNotificationsMockHandler() {
  return http.get('/notifications', () => {
    return HttpResponse.json({
      notifications: [
        buildNotificationMock({ id: 'dummy-id-4', title: 'ダミータイトル4' }),
        buildNotificationMock({ id: 'dummy-id-3', title: 'ダミータイトル3' }),
        buildNotificationMock({ id: 'dummy-id-2', title: 'ダミータイトル2' }),
        buildNotificationMock({
          id: 'dummy-id-1',
          title: 'ダミータイトル1',
          read: false,
        }),
      ],
    })
  })
}

export function buildGetNotificationDetailMockHandler() {
  return http.get('/notification/:notificationId', (req) => {
    const notificationId = req.params.notificationId as string

    return HttpResponse.json({
      notification: buildNotificationDetailMock({
        id: notificationId,
        title: 'ダミータイトル',
        read: false,
        body: `ダミーのお知らせの本文(${notificationId})`,
      }),
    })
  })
}

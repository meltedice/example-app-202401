import { HttpResponse, http } from 'msw'
import { buildNotificationMock } from './mockModels'

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
          read: true,
        }),
      ],
    })
  })
}

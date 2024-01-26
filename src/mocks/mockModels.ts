export interface Notification {
  id: string
  read: boolean
  title: string
  body: string
}

export function buildNotificationMock(
  params: Partial<Notification>
): Notification {
  return {
    id: 'dummy-id-1',
    read: false,
    title: 'ダミータイトル',
    body: 'ダミーのお知らせ',
    ...params,
  }
}

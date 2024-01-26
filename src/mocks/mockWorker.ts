import { setupWorker, StartOptions } from 'msw/browser'
import { buildGetNotificationsMockHandler } from './mockHandlers'

// API の mock 中でも通信を許可するパス名 例: "/src/" ./admin-web/ からの相対パス
const pathnameWhiteList: string[] = ['/src/', '/public/', '/node_modules/']

// API の mock 中でも通信を許可するホスト名 例: "example.com" プロトコル、ポート番号なし
const hostnameWhiteList: string[] = []

const mockWorkerStartOptions: StartOptions = {
  // waitUntilReady: true, // deprecated
  onUnhandledRequest: (req, print) => {
    const url = new URL(req.url)
    // ホワイトリストにある pathname への通信は許可
    if (
      pathnameWhiteList.some((pathname) => url.pathname.startsWith(pathname))
    ) {
      return
    }
    // ホワイトリストにある hostname への通信は許可
    if (
      hostnameWhiteList.some((hostname) => url.hostname.startsWith(hostname))
    ) {
      return
    }
    // モックできてない通信は一旦 warning 扱い
    print.warning()
  },
}

export async function startMockWorker() {
  const mockHandlers = [buildGetNotificationsMockHandler()]
  const mockWorker = setupWorker(...mockHandlers)
  await mockWorker.start(mockWorkerStartOptions)
}

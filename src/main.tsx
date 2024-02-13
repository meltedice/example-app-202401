import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

async function main() {
  // このサンプルアプリ内で呼び出されるすべての API をモック化するための処理です
  // 本番ではこのコードは入りませんし、未使用時はビルド時に取り除くように対策をする必要があります
  // モックの内容は src/mocks/mockHandlers.ts 内にあります
  const { startMockWorker } = await import('./mocks/mockWorker')
  await startMockWorker()

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main()

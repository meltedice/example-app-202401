import react from '@vitejs/plugin-react-swc'
import { certificateFor } from 'devcert'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig(async () => {
  const { key, cert } = await certificateFor('localhost')

  return {
    plugins: [react()],
    // localhost で HTTPS を使う
    server: {
      open: true,
      https: { key, cert },
    },
  }
})

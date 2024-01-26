import react from '@vitejs/plugin-react-swc'
import { certificateFor } from 'devcert'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig(async () => {
  const { key, cert } = await certificateFor('localhost')

  return {
    plugins: [react(), tsconfigPaths()],
    // localhost で HTTPS を使う
    server: {
      open: true,
      https: { key, cert },
    },
  }
})

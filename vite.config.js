import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // base: '/abstrapoint/',  // 👈 Add this line
  plugins: [react()],
})

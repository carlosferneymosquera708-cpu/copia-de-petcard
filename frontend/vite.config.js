import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import fs from 'fs';

export default defineConfig(({ command }) => ({
  plugins: [vue()],
  // Netlify sirve el sitio en la raíz, sin subruta
  base: '/',
  // El HTTPS con certificados locales solo se usa en desarrollo (npm run dev)
  server: {
    host: 'localhost',
    port: 5173,
    https: command === 'serve'
      ? {
          key: fs.readFileSync('./certs/localhost.key'),
          cert: fs.readFileSync('./certs/localhost.crt')
        }
      : undefined
  }
}));

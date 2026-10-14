import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import fs from 'fs';

export default defineConfig(({ command }) => ({
  plugins: [vue()],
  // Ruta base para GitHub Pages: https://<usuario>.github.io/copia-de-petcard/
  base: command === 'build' ? '/copia-de-petcard/' : '/',
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

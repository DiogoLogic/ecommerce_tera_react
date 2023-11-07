import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/Ecommerce_Tera_React/ecommerce_tera_react/src',// Substitua pelo caminho correto para o diretório de origem
    },
  },
});

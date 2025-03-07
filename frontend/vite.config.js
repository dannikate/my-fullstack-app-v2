import { defineConfig } from 'vite';

export default defineConfig({
    base: '//',
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3001/', // backend API server
                changeOrigin: true,
            },
        }
    },
    plugins: [],
});
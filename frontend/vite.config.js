import { defineConfig } from 'vite';

export default defineConfig({
    base: '/my-fullstack-app-v2/',
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
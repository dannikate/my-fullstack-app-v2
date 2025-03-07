import { defineConfig } from 'vite';

export default defineConfig({
    base: '/my-fullstack-app-v2/',
    server: {
        proxy: {
            '/api': {
                target: 'https://my-fullstack-app-v2.vercel.app/', // backend API server
                changeOrigin: true,
            },
        }
    },
    plugins: [],
});
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { inspectorServer } from '@react-dev-inspector/vite-plugin'
import path from 'path'
import { defineConfig as defineTestConfig } from 'vitest/config' // 引入 Vitest 的配置类型

// https://vite.dev/config/
export default defineConfig(
    defineTestConfig({
        plugins: [react(), inspectorServer()],
        server: {
            port: 8000,
            open: true,
            host: true,
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },

    })
)

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
      test: {
        // 启用类似 Jest 的全局测试 API
        globals: true,
        // 使用 jsdom 模拟 DOM
        environment: 'jsdom',
        // 测试文件匹配
        include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        // 测试覆盖率配置
        coverage: {
          provider: 'v8',
          reporter: ['text', 'html', 'json'],
        },
      },
    })
)

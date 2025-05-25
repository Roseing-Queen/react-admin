import {viteBaseConfig} from "./vite.base.config"
import type {UserConfig} from "vite";
const prod={
    ...viteBaseConfig,
    build: {
        outDir: "dist", // 构建输出目录
        assetsDir: "assets", // 静态资源存放目录
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
}as UserConfig;
export default prod;
// vite.base.config.ts

import type { UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import {inspectorServer} from "@react-dev-inspector/vite-plugin";


// 声明环境变量类型（可选），避免 TypeScript 报错
declare const __APP_ENV__: string;

const viteBaseConfig: UserConfig = {
    plugins: [react(),inspectorServer()], // 添加 React 插件支持
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"], // 支持的文件扩展名
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
    },
    define: {
        // 使用 VITE_ 前缀的变量更安全，Vite 默认会暴露这些变量给客户端
        __APP_ENV__: JSON.stringify(process.env.NODE_ENV || "development"),
    },
};

export { viteBaseConfig };

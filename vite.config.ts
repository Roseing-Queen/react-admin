import {defineConfig, loadEnv} from 'vite'
import prod from "./build/vite.prod.config.ts"
import dev from "./build/vite.dev.config.ts"
import { configDefaults } from 'vitest/config';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    const envConfig = env.NODE_ENV === "development" ? dev : prod;

    return {
        ...envConfig,
        test: {
            exclude: [...configDefaults.exclude, 'e2e/*'],
            root: './',
            // 其他 Vitest 配置...
        }
    };
});
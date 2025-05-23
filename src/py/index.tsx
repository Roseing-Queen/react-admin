import {loadPyodide, type PyodideInterface} from 'pyodide';

class PythonRunner {
    private pyodide: PyodideInterface | null = null;
    private readonly readyPromise: Promise<void>;

    constructor() {
        this.readyPromise = this.initialize();
    }

    // 初始化 Pyodide 环境
    private async initialize() {
        if (this.pyodide) return;

        // 从 npm 包加载 Pyodide
        this.pyodide = await loadPyodide({
            // 使用相对路径或 CDN，根据你的项目配置调整
            indexURL: import.meta.url.includes('http')
                ? 'https://cdn.jsdelivr.net/pyodide/v0.23.4/full/'
                : '/node_modules/pyodide/'
        });

        // 安装额外的包（如果需要）
        await this.pyodide.loadPackage(['numpy', 'pandas']);
    }

    // 等待环境准备好
    async ready() {
        await this.readyPromise;
    }

    // 执行 Python 代码
    async run(code: string) {
        await this.ready();

        try {
            const result = this.pyodide!.runPython(code);
            return this._convertResult(result);
        } catch (error) {
            console.error('Python 执行错误:', error);
            throw error;
        }
    }

    // 转换 Python 结果到 JavaScript
    private _convertResult(pyObject: unknown): unknown {
        if (pyObject === null || pyObject === undefined) {
            return null;
        }

        // 类型断言用于 PyProxy 对象（来自 Pyodide）
        const proxy = pyObject as { __class__: { __name__: string }; toJs: () => unknown; toString: () => string };

        // 转换 Python 列表
        if ('__class__' in proxy && proxy.__class__?.__name__ === 'list') {
            return proxy.toJs();
        }

        // 转换 Python 字典
        if ('__class__' in proxy && proxy.__class__?.__name__ === 'dict') {
            return proxy.toJs();
        }

        // 默认返回字符串表示
        if ('toString' in proxy && typeof proxy.toString === 'function') {
            return proxy.toString();
        }

        return String(proxy);
    }

    // 安装 Python 包
    async installPackage(packageName: string | string[]) {
        await this.ready();
        await this.pyodide!.loadPackage(packageName);
    }
}

const PyRunner = new PythonRunner();
export default PyRunner;

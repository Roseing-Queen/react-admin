import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  type CreateAxiosDefaults
} from 'axios';

export interface RequestConfig<T = unknown> extends AxiosRequestConfig {
  interceptors?: {
    request?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
    response?: (response: AxiosResponse<T>) => AxiosResponse<T>
  }
  showLoading?: boolean
}

export class HttpRequest {
  private instance: AxiosInstance;

  constructor(config?: CreateAxiosDefaults) {
    this.instance = axios.create({
      timeout: 10000,
      ...config
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 请求拦截器：添加token、处理loading状态
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // 响应拦截器：处理通用数据结构
        if (response.data.code !== 200) {
          return Promise.reject(response.data);
        }
        return response.data;
      },
      (error) => {
        // 错误处理
        return Promise.reject(error.response?.data || error.message);
      }
    );
  }

  public request<T = unknown>(config: RequestConfig<T>): Promise<T> {
    return this.instance.request(config);
  }

  public get<T = unknown>(url: string, config?: RequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET', url });
  }

  public post<T = unknown>(
    url: string,
    data?: unknown,
    config?: RequestConfig<T>
  ): Promise<T> {
    return this.request({ ...config, method: 'POST', url, data });
  }

  public put<T = unknown>(
    url: string,
    data?: unknown,
    config?: RequestConfig<T>
  ): Promise<T> {
    return this.request({ ...config, method: 'PUT', url, data });
  }

  public delete<T = unknown>(
    url: string,
    config?: RequestConfig<T>
  ): Promise<T> {
    return this.request({ ...config, method: 'DELETE', url });
  }
}

// 创建默认实例并导出
const http = new HttpRequest({
  baseURL: import.meta.env.VITE_API_BASE_URL
});

export default http;

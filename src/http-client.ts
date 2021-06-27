import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosPromise,
} from 'axios';

// es6 class wrapper for axios
class Axios {
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig = {}) {
    this.instance = axios.create(config);
  }
}

export interface IHttpClient {
  instance: AxiosInstance;
  get<R = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<R>;
  post<D = any, R = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): AxiosPromise<R>;
  put<D = any, R = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): AxiosPromise<R>;
  patch<D = any, R = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): AxiosPromise<R>;
  delete<R = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<R>;
}

// provides better optional typing for http methods than axios
export class HttpClient extends Axios implements IHttpClient {
  async get<R = any>(url: string, config?: AxiosRequestConfig) {
    const res = await this.instance.get<R>(url, config);
    return res;
  }

  async post<D = any, R = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ) {
    const res = await this.instance.post<R>(url, data, config);
    return res;
  }

  async put<D = any, R = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ) {
    const res = await this.instance.put<R>(url, data, config);
    return res;
  }

  async patch<D = any, R = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ) {
    const res = await this.instance.patch<R>(url, data, config);
    return res;
  }

  async delete<R = any>(url: string, config?: AxiosRequestConfig) {
    const res: AxiosResponse<R> = await this.instance.delete(url, config);
    return res;
  }
}

// export axios types for ease
export { AxiosError, AxiosPromise };

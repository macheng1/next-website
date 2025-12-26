/**
 * 统一的 HTTP 请求封装
 * 基于 axios，支持拦截器、错误处理等
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { getEnvConfig } from '../config/env.config';

// 响应数据接口
export interface ApiResponse<T = any> {
  code: number;
  data: T;
  message: string;
  success: boolean;
}

// 请求配置接口
export interface RequestConfig extends AxiosRequestConfig {
  skipErrorHandler?: boolean; // 是否跳过统一错误处理
  skipAuth?: boolean; // 是否跳过认证
}

class Request {
  private instance: AxiosInstance;

  constructor() {
    const config = getEnvConfig();
    
    // 创建 axios 实例
    this.instance = axios.create({
      baseURL: config.apiBaseUrl,
      timeout: config.timeout,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // 请求拦截器
    this.instance.interceptors.request.use(
      (config: any) => {
        // 添加 token
        const token = this.getToken();
        if (token && !config.skipAuth) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        // 可以在这里添加其他通用请求头
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data } = response;
        
        // 如果后端返回的是标准格式，判断 code
        if (data.code !== undefined) {
          if (data.code === 0 || data.code === 200) {
            return data;
          } else {
            return Promise.reject(data);
          }
        }
        
        // 直接返回数据
        return data;
      },
      (error: AxiosError) => {
        return this.handleError(error);
      }
    );
  }

  /**
   * 获取 Token
   */
  private getToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  /**
   * 统一错误处理
   */
  private handleError(error: AxiosError): Promise<never> {
    const { response } = error;

    if (response) {
      const { status, data } = response;
      
      switch (status) {
        case 401:
          // 未授权，清除 token 并跳转登录
          this.clearAuth();
          console.error('未授权，请重新登录');
          break;
        case 403:
          console.error('没有权限访问');
          break;
        case 404:
          console.error('请求的资源不存在');
          break;
        case 500:
          console.error('服务器错误');
          break;
        case 502:
          console.error('网关错误');
          break;
        case 503:
          console.error('服务不可用');
          break;
        default:
          console.error(`请求错误: ${status}`);
      }
      
      return Promise.reject(data || error);
    } else if (error.request) {
      console.error('网络错误，请检查网络连接');
      return Promise.reject(new Error('网络错误'));
    } else {
      console.error('请求配置错误:', error.message);
      return Promise.reject(error);
    }
  }

  /**
   * 清除认证信息
   */
  private clearAuth(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    // 可以在这里添加跳转到登录页的逻辑
  }

  /**
   * GET 请求
   */
  get<T = any>(url: string, config?: RequestConfig): Promise<T> {
    return this.instance.get(url, config);
  }

  /**
   * POST 请求
   */
  post<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return this.instance.post(url, data, config);
  }

  /**
   * PUT 请求
   */
  put<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return this.instance.put(url, data, config);
  }

  /**
   * DELETE 请求
   */
  delete<T = any>(url: string, config?: RequestConfig): Promise<T> {
    return this.instance.delete(url, config);
  }

  /**
   * PATCH 请求
   */
  patch<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return this.instance.patch(url, data, config);
  }

  /**
   * 自定义请求
   */
  request<T = any>(config: RequestConfig): Promise<T> {
    return this.instance.request(config);
  }
}

// 导出单例
export const request = new Request();

// 导出常用方法
export const { get, post, put, delete: del, patch, request: customRequest } = request;

/**
 * 文件下载封装
 * 支持多种下载方式和进度监听
 */

import axios, { AxiosRequestConfig } from 'axios';
import { getEnvConfig } from '../config/env.config';

export interface DownloadConfig extends AxiosRequestConfig {
  onProgress?: (progress: number) => void; // 下载进度回调
  fileName?: string; // 自定义文件名
}

/**
 * 下载文件
 * @param url 下载地址（相对或绝对路径）
 * @param config 配置项
 */
export const downloadFile = async (url: string, config?: DownloadConfig): Promise<void> => {
  const { onProgress, fileName, ...axiosConfig } = config || {};
  
  try {
    // 获取 token
    const token = getToken();
    
    // 判断是否为绝对路径
    const isAbsoluteUrl = /^https?:\/\//.test(url);
    const downloadUrl = isAbsoluteUrl ? url : `${getEnvConfig().apiBaseUrl}${url}`;
    
    const response = await axios({
      url: downloadUrl,
      method: 'GET',
      responseType: 'blob',
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
        ...axiosConfig?.headers,
      },
      onDownloadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onProgress(progress);
        }
      },
      ...axiosConfig,
    });

    // 创建下载链接
    const blob = new Blob([response.data]);
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    
    // 获取文件名
    const finalFileName = fileName || getFileNameFromResponse(response) || 'download';
    downloadLink.download = finalFileName;
    
    // 触发下载
    document.body.appendChild(downloadLink);
    downloadLink.click();
    
    // 清理
    document.body.removeChild(downloadLink);
    window.URL.revokeObjectURL(downloadLink.href);
  } catch (error) {
    console.error('文件下载失败:', error);
    throw error;
  }
};

/**
 * 通过 POST 请求下载文件
 * @param url 下载地址
 * @param data 请求数据
 * @param config 配置项
 */
export const downloadFileByPost = async (
  url: string,
  data?: any,
  config?: DownloadConfig
): Promise<void> => {
  const { onProgress, fileName, ...axiosConfig } = config || {};
  
  try {
    const token = getToken();
    const isAbsoluteUrl = /^https?:\/\//.test(url);
    const downloadUrl = isAbsoluteUrl ? url : `${getEnvConfig().apiBaseUrl}${url}`;
    
    const response = await axios({
      url: downloadUrl,
      method: 'POST',
      data,
      responseType: 'blob',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...axiosConfig?.headers,
      },
      onDownloadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onProgress(progress);
        }
      },
      ...axiosConfig,
    });

    const blob = new Blob([response.data]);
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    
    const finalFileName = fileName || getFileNameFromResponse(response) || 'download';
    downloadLink.download = finalFileName;
    
    document.body.appendChild(downloadLink);
    downloadLink.click();
    
    document.body.removeChild(downloadLink);
    window.URL.revokeObjectURL(downloadLink.href);
  } catch (error) {
    console.error('文件下载失败:', error);
    throw error;
  }
};

/**
 * 导出文件（用于导出 Excel、PDF 等）
 * @param url 导出接口地址
 * @param params 查询参数
 * @param config 配置项
 */
export const exportFile = async (
  url: string,
  params?: Record<string, any>,
  config?: DownloadConfig
): Promise<void> => {
  const { onProgress, fileName, ...axiosConfig } = config || {};
  
  try {
    const token = getToken();
    const isAbsoluteUrl = /^https?:\/\//.test(url);
    const exportUrl = isAbsoluteUrl ? url : `${getEnvConfig().apiBaseUrl}${url}`;
    
    const response = await axios({
      url: exportUrl,
      method: 'GET',
      params,
      responseType: 'blob',
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
        ...axiosConfig?.headers,
      },
      onDownloadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onProgress(progress);
        }
      },
      ...axiosConfig,
    });

    const blob = new Blob([response.data]);
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    
    const finalFileName = fileName || getFileNameFromResponse(response) || `export_${Date.now()}`;
    downloadLink.download = finalFileName;
    
    document.body.appendChild(downloadLink);
    downloadLink.click();
    
    document.body.removeChild(downloadLink);
    window.URL.revokeObjectURL(downloadLink.href);
  } catch (error) {
    console.error('文件导出失败:', error);
    throw error;
  }
};

/**
 * 预览文件（在新窗口打开）
 * @param url 文件地址
 */
export const previewFile = (url: string): void => {
  const isAbsoluteUrl = /^https?:\/\//.test(url);
  const previewUrl = isAbsoluteUrl ? url : `${getEnvConfig().apiBaseUrl}${url}`;
  
  window.open(previewUrl, '_blank');
};

/**
 * 从响应头中获取文件名
 */
const getFileNameFromResponse = (response: any): string | null => {
  const contentDisposition = response.headers['content-disposition'];
  if (contentDisposition) {
    const fileNameMatch = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
    if (fileNameMatch && fileNameMatch[1]) {
      let fileName = fileNameMatch[1].replace(/['"]/g, '');
      // 处理 URL 编码的文件名
      try {
        fileName = decodeURIComponent(fileName);
      } catch (e) {
        console.warn('文件名解码失败:', e);
      }
      return fileName;
    }
  }
  return null;
};

/**
 * 获取 Token
 */
const getToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token') || sessionStorage.getItem('token');
};

/**
 * 批量下载文件
 * @param urls 文件地址数组
 * @param config 配置项
 */
export const downloadMultipleFiles = async (
  urls: string[],
  config?: DownloadConfig
): Promise<void> => {
  for (const url of urls) {
    await downloadFile(url, config);
    // 延迟一下，避免浏览器阻止多个下载
    await new Promise(resolve => setTimeout(resolve, 500));
  }
};

/**
 * 业务接口封装
 * 基于统一的 request 封装具体业务接口
 */

import { get, post, put, del } from './request';
import { downloadFile, exportFile } from './download';

// ==================== 示例接口 ====================

/**
 * 获取示例数据
 */
export const fetchData = async (endpoint: string, params?: any) => {
  return get(endpoint, { params });
};

/**
 * 提交示例数据
 */
export const postData = async (endpoint: string, data: any) => {
  return post(endpoint, data);
};

// ==================== 用户相关接口 ====================

/**
 * 用户登录
 */
export const login = async (username: string, password: string) => {
  return post('/user/login', { username, password });
};

/**
 * 获取用户信息
 */
export const getUserInfo = async () => {
  return get('/user/info');
};

/**
 * 退出登录
 */
export const logout = async () => {
  return post('/user/logout');
};

// ==================== 数据查询接口 ====================

/**
 * 获取列表数据
 */
export const getList = async (params: any) => {
  return get('/data/list', { params });
};

/**
 * 获取详情
 */
export const getDetail = async (id: string | number) => {
  return get(`/data/detail/${id}`);
};

/**
 * 创建数据
 */
export const createData = async (data: any) => {
  return post('/data/create', data);
};

/**
 * 更新数据
 */
export const updateData = async (id: string | number, data: any) => {
  return put(`/data/update/${id}`, data);
};

/**
 * 删除数据
 */
export const deleteData = async (id: string | number) => {
  return del(`/data/delete/${id}`);
};

// ==================== 文件相关接口 ====================

/**
 * 上传文件
 */
export const uploadFile = async (file: File, onProgress?: (progress: number) => void) => {
  const formData = new FormData();
  formData.append('file', file);
  
  return post('/file/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress: (progressEvent) => {
      if (onProgress && progressEvent.total) {
        const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        onProgress(progress);
      }
    },
  });
};

/**
 * 下载文件
 */
export const downloadFileById = async (fileId: string, fileName?: string) => {
  return downloadFile(`/file/download/${fileId}`, { fileName });
};

/**
 * 导出 Excel
 */
export const exportExcel = async (params: any, fileName?: string) => {
  return exportFile('/export/excel', params, { fileName });
};

/**
 * 导出 PDF
 */
export const exportPdf = async (params: any, fileName?: string) => {
  return exportFile('/export/pdf', params, { fileName });
};

// ==================== RFQ 相关接口 ====================

/**
 * 提交报价请求
 */
export const submitRFQ = async (data: any) => {
  return post('/rfq/submit', data);
};

/**
 * 获取报价列表
 */
export const getRFQList = async (params: any) => {
  return get('/rfq/list', { params });
};

// 更多业务接口可在此扩展...

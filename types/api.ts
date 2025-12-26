/**
 * API 接口类型定义
 */

// 通用分页参数
export interface PaginationParams {
  page: number;
  pageSize: number;
  keyword?: string;
}

// 通用分页响应
export interface PaginationResponse<T> {
  list: T[];
  total: number;
  page: number;
  pageSize: number;
}

// 用户相关类型
export interface LoginParams {
  username: string;
  password: string;
}

export interface UserInfo {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  role: string;
}

// 文件相关类型
export interface UploadResponse {
  fileId: string;
  fileName: string;
  fileUrl: string;
  fileSize: number;
}

export interface FileInfo {
  id: string;
  name: string;
  url: string;
  size: number;
  type: string;
  createdAt: string;
}

// RFQ 相关类型
export interface RFQData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  productType: string;
  quantity: number;
  description: string;
  attachments?: string[];
}

export interface RFQItem {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  productType: string;
  quantity: number;
  description: string;
  status: 'pending' | 'processing' | 'completed' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

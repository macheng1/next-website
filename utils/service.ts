import axios from 'axios';

// 预留后端 API 基础地址
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

// 通用 axios 实例
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 示例：获取数据
export const fetchData = async (endpoint: string, params?: any) => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    // 这里可以做统一错误处理
    throw error;
  }
};

// 示例：提交数据
export const postData = async (endpoint: string, data: any, options?: { headers?: any }) => {
  try {
    // 如果 endpoint 是绝对地址，直接用 axios.post，否则用 api 实例
    const isAbsolute = /^https?:\/\//.test(endpoint);
    const response = isAbsolute
      ? await axios.post(endpoint, data, options)
      : await api.post(endpoint, data, options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 更多 service 方法可在此扩展

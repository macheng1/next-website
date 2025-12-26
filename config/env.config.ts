/**
 * 环境配置文件
 * 支持 dev、test、uat、pro 四个环境
 */

export type Environment = 'dev' | 'test' | 'uat' | 'pro';

interface EnvConfig {
  apiBaseUrl: string;
  timeout: number;
  [key: string]: any;
}

const envConfigs: Record<Environment, EnvConfig> = {
  dev: {
    apiBaseUrl: 'http://localhost:3000/api',
    timeout: 30000,
  },
  test: {
    apiBaseUrl: 'https://test-api.yourdomain.com/api',
    timeout: 20000,
  },
  uat: {
    apiBaseUrl: 'https://uat-api.yourdomain.com/api',
    timeout: 15000,
  },
  pro: {
    apiBaseUrl: 'https://api.yourdomain.com/api',
    timeout: 10000,
  },
};

/**
 * 获取当前环境
 */
export const getCurrentEnv = (): Environment => {
  const env = process.env.NEXT_PUBLIC_ENV || process.env.NODE_ENV;
  
  if (env === 'production') return 'pro';
  if (env === 'uat') return 'uat';
  if (env === 'test') return 'test';
  return 'dev';
};

/**
 * 获取当前环境配置
 */
export const getEnvConfig = (): EnvConfig => {
  const currentEnv = getCurrentEnv();
  return envConfigs[currentEnv];
};

/**
 * 是否为生产环境
 */
export const isProd = (): boolean => {
  return getCurrentEnv() === 'pro';
};

/**
 * 是否为开发环境
 */
export const isDev = (): boolean => {
  return getCurrentEnv() === 'dev';
};

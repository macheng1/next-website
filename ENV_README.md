# 环境配置文件说明

本项目支持四个环境：`dev`（开发）、`test`（测试）、`uat`（预生产）、`pro`（生产）

## 环境变量文件

- `.env.development` - 开发环境配置
- `.env.test` - 测试环境配置
- `.env.uat` - UAT 环境配置
- `.env.production` - 生产环境配置

## 使用方式

### 开发模式

```bash
# 开发环境
npm run dev

# 测试环境
npm run dev:test

# UAT 环境
npm run dev:uat

# 生产环境
npm run dev:pro
```

### 构建打包

```bash
# 开发环境构建
npm run build

# 测试环境构建
npm run build:test

# UAT 环境构建
npm run build:uat

# 生产环境构建
npm run build:pro
```

### 启动服务

```bash
# 开发环境启动
npm start

# 测试环境启动
npm run start:test

# UAT 环境启动
npm run start:uat

# 生产环境启动
npm run start:pro
```

## API 使用示例

### 基础 HTTP 请求

```typescript
import { get, post, put, del } from "@/utils/request";

// GET 请求
const data = await get("/user/info");

// POST 请求
const result = await post("/user/login", { username, password });

// PUT 请求
await put("/user/update", { name: "new name" });

// DELETE 请求
await del("/user/delete/123");
```

### 业务接口调用

```typescript
import { getUserInfo, submitRFQ, exportExcel } from "@/utils/service";

// 获取用户信息
const userInfo = await getUserInfo();

// 提交 RFQ
await submitRFQ(rfqData);

// 导出 Excel
await exportExcel({ startDate, endDate }, "report.xlsx");
```

### 文件下载

```typescript
import {
  downloadFile,
  downloadFileByPost,
  exportFile,
  previewFile,
} from "@/utils/download";

// 下载文件（GET）
await downloadFile("/file/download/123", {
  fileName: "document.pdf",
  onProgress: (progress) => {
    console.log(`下载进度: ${progress}%`);
  },
});

// 下载文件（POST）
await downloadFileByPost(
  "/file/export",
  { id: 123 },
  {
    fileName: "export.xlsx",
    onProgress: (progress) => {
      console.log(`下载进度: ${progress}%`);
    },
  }
);

// 导出文件
await exportFile(
  "/export/excel",
  { type: "user" },
  {
    fileName: "users.xlsx",
  }
);

// 预览文件（新窗口打开）
previewFile("/file/preview/123");
```

### 文件上传

```typescript
import { uploadFile } from "@/utils/service";

// 上传文件
const handleUpload = async (file: File) => {
  try {
    const result = await uploadFile(file, (progress) => {
      console.log(`上传进度: ${progress}%`);
    });
    console.log("上传成功:", result);
  } catch (error) {
    console.error("上传失败:", error);
  }
};
```

## 环境配置 API

```typescript
import {
  getCurrentEnv,
  getEnvConfig,
  isProd,
  isDev,
} from "@/config/env.config";

// 获取当前环境
const env = getCurrentEnv(); // 'dev' | 'test' | 'uat' | 'pro'

// 获取当前环境配置
const config = getEnvConfig();
console.log(config.apiBaseUrl);

// 判断环境
if (isProd()) {
  // 生产环境逻辑
}

if (isDev()) {
  // 开发环境逻辑
}
```

## 注意事项

1. 环境变量文件不要提交敏感信息（如 API Key）到 git
2. 建议将 `.env.*.local` 文件添加到 `.gitignore`
3. 生产环境的配置请在部署时通过环境变量注入
4. 所有对外暴露的环境变量必须以 `NEXT_PUBLIC_` 开头

# 项目目录结构说明

```
next-website/
├── App.tsx                # 应用入口组件（如有）
├── constants.tsx          # 全局常量
├── geminiService.ts       # Gemini AI 相关服务
├── i18n.ts                # 国际化配置
├── index.css              # 全局样式
├── index.html             # HTML 模板（如有）
├── index.tsx              # 入口文件
├── metadata.json          # 元数据
├── next-env.d.ts          # Next.js 类型声明
├── package.json           # 项目依赖与脚本
├── postcss.config.cjs     # PostCSS 配置
├── README.md              # 项目说明文档
├── tailwind.config.cjs    # Tailwind CSS 配置
├── tsconfig.json          # TypeScript 配置
├── types.ts               # 全局类型定义
├── types/
│   └── api.ts             # API 相关类型定义
├── config/
│   └── env.config.ts      # 环境配置
├── components/            # 业务通用组件
│   ├── AIChat.tsx
│   └── Navbar.tsx
├── pages/                 # 页面目录（Next.js 路由）
│   ├── _app.tsx           # Next.js 全局 App 入口
│   ├── Capabilities.tsx   # 能力介绍页
│   ├── CaseStudies.tsx    # 案例页
│   ├── Home.tsx           # 首页
│   ├── index.tsx          # 默认首页
│   ├── Resources.tsx      # 资源页
│   ├── RFQ.tsx            # 报价页
│   ├── Showroom.tsx       # 展厅页
│   └── api/               # API 路由（后端接口）
│       ├── example.ts
│       └── qwen.ts
├── utils/                 # 工具与通用方法
│   ├── service.ts         # 业务接口封装
│   ├── request.ts         # HTTP 请求封装
│   └── download.ts        # 文件下载封装
└── .env.*                 # 多环境变量文件
```

## 说明

- `components/`：存放可复用的 UI 组件
- `pages/`：Next.js 路由页面，`api/` 目录下为后端接口
- `utils/`：通用工具方法和接口封装
- `config/`：环境与全局配置
- `types/`：类型定义，便于类型安全
- `.env.*`：多环境变量文件，支持 dev/test/uat/pro

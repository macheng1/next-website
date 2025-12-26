# 基于官方 Node 镜像构建
FROM node:20-alpine AS builder

# 设置工作目录
WORKDIR /app

# 拷贝依赖文件
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# 安装依赖
RUN npm install --production=false

# 拷贝全部源代码
COPY . .

# 构建 Next.js 应用
RUN npm run build

# 生产环境镜像
FROM node:20-alpine AS runner
WORKDIR /app

# 只拷贝生产依赖
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/.env.production ./.env.production

# 启动 Next.js 应用
EXPOSE 3000
CMD ["npm", "run", "start"]

# 基于官方 Node 镜像构建
FROM node:20-alpine AS builder

# 安装 pnpm
RUN npm install -g pnpm

# 设置工作目录
WORKDIR /app

# 拷贝依赖文件
COPY package.json pnpm-lock.yaml* .

# 安装依赖
RUN pnpm install --frozen-lockfile

# 拷贝全部源代码
COPY . .

# 构建 Next.js 应用
RUN pnpm run build

# 生产环境镜像
FROM node:20-alpine AS runner
WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm

# 只拷贝生产依赖和构建产物
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/.env.production ./.env.production
COPY --from=builder /app/.env.development ./.env.development
COPY --from=builder /app/.env.test ./.env.test
COPY --from=builder /app/.env.uat ./.env.uat
COPY --from=builder /app/.env.local ./.env.local

# 启动 Next.js 应用
ENV ENV_NAME=development
EXPOSE 4001
ENV PORT=4001
CMD ["/bin/sh", "-c", "cp .env.$ENV_NAME .env.local && pnpm start"]

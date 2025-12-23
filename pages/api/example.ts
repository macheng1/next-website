import type { NextApiRequest, NextApiResponse } from 'next';

// 示例 API 路由，后续可根据实际业务扩展
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // 这里可以连接数据库或调用后端服务
    res.status(200).json({ message: 'GET 请求成功', data: [] });
  } else if (req.method === 'POST') {
    // 处理 POST 请求
    res.status(200).json({ message: 'POST 请求成功', data: req.body });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

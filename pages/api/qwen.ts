
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.QWEN_API_KEY;
  const endpoint = process.env.QWEN_API_ENDPOINT || 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions';
  const model = process.env.QWEN_MODEL || 'qwen-plus';
  const defaultSystemPrompt = process.env.QWEN_SYSTEM_PROMPT || 'You are a helpful assistant.';

  if (!apiKey) {
    res.status(500).json({ error: 'QWEN_API_KEY not set' });
    return;
  }

  // 合并默认配置和前端传参
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const messages = body.messages || [];
  // 如果没有 system prompt，自动插入
  if (!messages.find((m: any) => m.role === 'system')) {
    messages.unshift({ role: 'system', content: defaultSystemPrompt });
  }

  const payload = {
    ...body,
    model: body.model || model,
    messages,
  };

  try {
    const dashRes = await axios.post(endpoint, payload, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      timeout: 15000,
    });
    res.status(dashRes.status).json(dashRes.data);
  } catch (e: any) {
    // axios 错误处理
    if (e.response) {
      res.status(e.response.status).json(e.response.data);
    } else {
      res.status(500).json({ error: 'Qwen API request failed', detail: String(e.message || e) });
    }
  }
}

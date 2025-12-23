
import { fetchData, postData } from './utils/service';
import { Language } from "./i18n";

// 预留：后端获取示例
export const getExampleData = async () => {
  return fetchData('/api/example');
};

// 预留：后端提交示例
export const submitExampleData = async (data: any) => {
  return postData('/api/example', data);
};

// 保留原有 AI 技术支持接口
export const getTechnicalSupportResponse = async (userQuery: string, currentLang: Language) => {
  const languageName = currentLang === 'zh' ? 'Chinese' : 'English';
  try {
    const response = await postData(
      '/api/qwen',
      {
        model: 'qwen-plus',
        messages: [
          {
            role: "system",
            content: `You are the Titan-Mech Industrial Support Assistant.\nKnowledge Base: Titan-V5 CNC, Sentinel-12 Robot, Nexus Energy.\nContext: The user is currently browsing the site in ${languageName}.\nRequirements:\n1. Respond strictly in ${languageName}.\n2. Maintain professional industrial engineering tone.\n3. Suggest RFQ for complex blueprints.`
          },
          {
            role: "user",
            content: userQuery
          }
        ]
      }
    );
    // 返回结构适配
    const reply = response?.choices?.[0]?.message?.content;
    return reply || (currentLang === 'zh' ? "抱歉，未能获取有效回复。" : "Sorry, no valid response received.");
  } catch (error) {
    console.error("Qwen API Error:", error);
    return currentLang === 'zh' ? "抱歉，技术数据库连接异常。" : "Sorry, the technical database is currently unavailable.";
  }
};
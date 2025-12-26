

import { MessageSquare, Send, X, Bot } from 'lucide-react';
import { getTechnicalSupportResponse } from '../geminiService';
import { useTranslation } from '../i18n';
import React, { useState, useEffect, useRef } from 'react';
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AIChat: React.FC = () => {
  const { t, lang } = useTranslation();
  console.log("🚀 ~ AIChat ~ t:", t)
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content: lang === 'zh'
          ? '您好！我是泰坦智能助手。今天有什么可以帮您的？'
          : 'Hello! I am Titan AI Assistant. How can I help you today?'
      }
    ]);
  }, [lang]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const response = await getTechnicalSupportResponse(userMessage, lang);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all z-50 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageSquare size={28} />
      </button>

      <div className={`fixed bottom-8 right-8 w-96 max-h-[600px] h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col z-50 transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        <div className="p-4 bg-slate-900 text-white rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot size={20} className="text-blue-500" />
            <p className="font-bold text-sm">{lang === 'zh' ? '泰坦技术助理' : 'Titan Technical AI'}</p>
          </div>
          <button onClick={() => setIsOpen(false)}><X size={20} /></button>
        </div>

        <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white shadow-sm border'}`}>
                <p>{m.content}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t">
          <div className="flex items-center space-x-2 bg-slate-100 rounded-xl px-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={lang === 'zh' ? '输入您的问题...' : 'Type your question...'}
              className="flex-grow bg-transparent py-3 text-sm outline-none"
            />
            <button onClick={handleSend} className="text-blue-600"><Send size={20} /></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChat;

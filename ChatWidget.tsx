import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, MessageSquare, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

export const ChatWidget: React.FC<{ onOpenProposal: () => void }> = ({ onOpenProposal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: `Hello! 👋 I am the OrionPulse AI Assistant. How can I help you scale your business today? You can ask about our AI chatbots, SEO services, web design, or pricing!`,
      time: 'Just now'
    }
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages(prev => [...prev, { sender: 'user', text: userMsg, time: now }]);
    setInput('');

    // Generate intelligent AI response
    setTimeout(() => {
      let botResponse = "Thank you for reaching out! OrionPulse Technologies OPC Pvt Ltd specializes in AI automation, bespoke web design, SEO, and performance marketing. Would you like a free custom proposal for your business?";

      const lower = userMsg.toLowerCase();
      if (lower.includes('price') || lower.includes('cost') || lower.includes('plan')) {
        botResponse = "Our Growth Retainers start at $1,499/mo for Starter AI Growth, $3,499/mo for the Scale Growth Engine, and custom packages for Enterprise. Annual billing includes a 20% discount!";
      } else if (lower.includes('service') || lower.includes('seo') || lower.includes('ad') || lower.includes('web')) {
        botResponse = "We offer 15 full-stack growth services including SEO, Google Ads, Meta Ads, React/Next.js Web Apps, 24/7 Gemini AI Chatbots, B2B Lead Gen, and CRM Automation!";
      } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('email') || lower.includes('location')) {
        botResponse = `You can reach our Bengaluru office directly at ${COMPANY_INFO.phone} or email ${COMPANY_INFO.email}. Average response time is under 15 minutes!`;
      } else if (lower.includes('portfolio') || lower.includes('case') || lower.includes('result')) {
        botResponse = "We have delivered 250+ projects with an average 4.8x ROAS and $45M+ client revenue generated. Check out our interactive Case Studies section on this page!";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botResponse, time: 'Just now' }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 p-4 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#0A84FF] text-slate-950 font-bold shadow-2xl hover:scale-110 transition duration-300 cursor-pointer"
          aria-label="Open AI Chat Assistant"
        >
          <div className="relative">
            <Bot className="w-6 h-6 text-slate-950" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
            </span>
          </div>
          <span className="hidden sm:inline text-xs font-mono-tech tracking-wider uppercase">
            AI Assistant Live
          </span>
        </button>
      )}

      {/* Chat Drawer Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[500px] rounded-3xl bg-slate-900 border border-white/20 shadow-2xl flex flex-col justify-between overflow-hidden animate-fadeIn">
          
          {/* Header */}
          <div className="p-4 bg-slate-950 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00E5FF] to-[#0A84FF] flex items-center justify-center text-slate-950 font-bold">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">OrionPulse AI Agent</h4>
                <span className="text-[10px] text-[#10B981] font-mono-tech flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  Gemini 2.5 Active
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-950/60">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[82%] p-3 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#00E5FF] text-slate-950 font-medium rounded-tr-none'
                      : 'bg-slate-800 text-slate-200 border border-white/10 rounded-tl-none'
                  }`}
                >
                  <div>{msg.text}</div>
                  <div className={`text-[9px] mt-1 ${msg.sender === 'user' ? 'text-slate-800' : 'text-slate-400'}`}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout & Input */}
          <div className="p-3 bg-slate-950 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenProposal();
              }}
              className="w-full py-2 px-3 text-[11px] font-bold text-slate-950 bg-gradient-to-r from-[#00E5FF] to-[#0A84FF] rounded-xl hover:opacity-90 transition cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Instant Free Proposal</span>
            </button>

            <form onSubmit={handleSend} className="flex gap-2">
              <input
                type="text"
                placeholder="Ask OrionPulse AI..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-white/15 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-[#00E5FF] text-slate-950 hover:bg-[#33ECFF] transition cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}
    </div>
  );
};

'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, X, Send } from 'lucide-react';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');

  // AI SDK v6: api url goes into transport
  const transport = useMemo(() => new DefaultChatTransport({ api: '/api/chat' }), []);
  const { messages, status, sendMessage } = useChat({ transport });

  const isLoading = status === 'streaming' || status === 'submitted';

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isLoading) return;
    setInput('');
    await sendMessage({ text });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Extract plain text from AI SDK v6 message parts
  const getMessageText = (m: (typeof messages)[number]): string => {
    if (!m.parts) return '';
    return m.parts
      .filter((p) => p.type === 'text')
      .map((p) => ('text' in p ? p.text : ''))
      .join('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="bg-card w-[calc(100vw-2rem)] sm:w-96 rounded-2xl shadow-2xl overflow-hidden mb-4 border border-border flex flex-col h-[60vh] sm:h-[500px] max-h-[80vh] drop-shadow-xl">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center shadow-sm z-10 shrink-0">
            <div>
              <h3 className="font-bold tracking-tight">Hospital Concierge</h3>
              <p className="text-xs opacity-90 font-medium mt-0.5">Ask about our services</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-black/20 hover:text-white rounded-full transition-colors h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4 bg-muted/30">
            <div className="flex flex-col gap-4 pb-4">
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground text-sm p-5 bg-background rounded-xl border-border/50 border mt-4 mx-2 shadow-sm">
                  <p>Hello! How can I help you regarding your orthopaedic needs today?</p>
                </div>
              )}
              {messages.map((m) => {
                const text = getMessageText(m);
                if (!text) return null;
                return (
                  <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`px-4 py-2.5 rounded-2xl max-w-[85%] text-sm shadow-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-tr-sm'
                        : 'bg-background border border-border/50 text-foreground rounded-tl-sm'
                    }`}>
                      {text}
                    </div>
                  </div>
                );
              })}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="px-4 py-2.5 rounded-2xl text-sm bg-background border border-border/50 text-foreground rounded-tl-sm shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-3 bg-background border-t border-border/50 flex gap-2 shrink-0">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a question..."
              disabled={isLoading}
              className="flex-1 rounded-full border border-border/60 focus:outline-none focus:ring-2 focus:ring-primary/40 h-10 px-4 text-sm bg-muted/20 text-foreground disabled:opacity-50"
            />
            <Button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              size="icon"
              className="rounded-full h-10 w-10 shrink-0 shadow-md"
            >
              <Send className="h-4 w-4 ml-0.5" />
            </Button>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={`h-14 w-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 ${
          isOpen
            ? 'bg-secondary text-secondary-foreground'
            : 'bg-primary text-primary-foreground hover:shadow-primary/25 hover:shadow-xl'
        }`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
}

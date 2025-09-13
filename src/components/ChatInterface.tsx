import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, MessageSquare } from "lucide-react";
import { ChatMessage, getCampusResponse } from "@/data/campusData";
import { useToast } from "@/hooks/use-toast";

export const ChatInterface = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I\'m your Smart Campus Assistant. I can help you with library hours, dining options, fitness center info, parking, class schedules, and more. What would you like to know?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getCampusResponse(inputValue);
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
      
      toast({
        title: "Response received",
        description: "I've found some information for you!",
      });
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-card backdrop-blur-sm border-0 shadow-elegant">
      <div className="flex items-center gap-3 p-6 border-b border-border/50">
        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Smart Campus Assistant</h3>
          <p className="text-sm text-muted-foreground">Ask me about campus services</p>
        </div>
      </div>

      <ScrollArea className="h-96 p-6" ref={scrollRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.type === 'user' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground'
              }`}>
                {message.type === 'user' ? (
                  <User className="w-4 h-4" />
                ) : (
                  <Bot className="w-4 h-4" />
                )}
              </div>
              <div className={`flex-1 max-w-[80%] ${message.type === 'user' ? 'text-right' : ''}`}>
                <div className={`p-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-primary text-primary-foreground ml-4'
                    : 'bg-muted text-muted-foreground mr-4'
                }`}>
                  <p className="text-sm">{message.content}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1 px-3">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-muted text-muted-foreground p-3 rounded-lg mr-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-6 border-t border-border/50">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about campus services..."
            className="flex-1 border-border/50 focus:border-primary/50 transition-smooth"
            disabled={isTyping}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-smooth"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
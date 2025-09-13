import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ChatInterface } from "@/components/ChatInterface";

const Index = () => {
  const [showChat, setShowChat] = useState(false);

  const handleStartChat = () => {
    setShowChat(true);
    // Smooth scroll to chat section
    setTimeout(() => {
      document.getElementById('chat-section')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onStartChat={handleStartChat} />
      
      {showChat && (
        <section id="chat-section" className="py-20 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Chat with Your Campus Assistant
            </h2>
            <p className="text-lg text-muted-foreground">
              Ask questions about any campus service and get instant, helpful responses.
            </p>
          </div>
          <ChatInterface />
        </section>
      )}
    </div>
  );
};

export default Index;
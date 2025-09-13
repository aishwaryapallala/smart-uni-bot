import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Clock, MapPin, Search, Users, BookOpen } from "lucide-react";
import campusHero from "@/assets/campus-hero.jpg";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card className="p-6 bg-gradient-card backdrop-blur-sm border-0 shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1">
    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </Card>
);

interface HeroSectionProps {
  onStartChat: () => void;
}

export const HeroSection = ({ onStartChat }: HeroSectionProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={campusHero} 
          alt="University Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Smart Campus
            <span className="block bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Assistant
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your intelligent guide to campus life. Get instant answers about dining, library hours, 
            fitness facilities, parking, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={onStartChat}
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-glow transition-bounce text-lg px-8 py-6 rounded-xl"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Chatting
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 transition-smooth text-lg px-8 py-6 rounded-xl"
            >
              <Search className="w-5 h-5 mr-2" />
              Explore Services
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <FeatureCard
            icon={<Clock className="w-6 h-6 text-primary-foreground" />}
            title="24/7 Availability"
            description="Get instant answers anytime, day or night. No more waiting for office hours."
          />
          <FeatureCard
            icon={<MapPin className="w-6 h-6 text-primary-foreground" />}
            title="Campus Navigation"
            description="Find buildings, services, and facilities with detailed location information."
          />
          <FeatureCard
            icon={<BookOpen className="w-6 h-6 text-primary-foreground" />}
            title="Academic Support"
            description="Access library services, study spaces, and academic resource information."
          />
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">15K+</div>
            <div className="text-white/80">Students Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-white/80">Campus Services</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/80">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99%</div>
            <div className="text-white/80">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};
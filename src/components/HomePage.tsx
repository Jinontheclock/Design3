import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface HomePageProps {
  onNavigate: (page: 'home' | 'learn' | 'recommendations') => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [learnBubble, setLearnBubble] = useState(false);
  const [recoBubble, setRecoBubble] = useState(false);

  const handleLearnClick = () => {
    setLearnBubble(true);
    setTimeout(() => {
      onNavigate('learn');
      setLearnBubble(false);
    }, 1000);
  };

  const handleRecoClick = () => {
    setRecoBubble(true);
    setTimeout(() => {
      onNavigate('recommendations');
      setRecoBubble(false);
    }, 1000);
  };

  return (
    <>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <div className="min-h-screen relative z-10 flex flex-col">
        <main className="container mx-auto px-4 py-12 flex-1">
          <div className="mb-8 max-w-7xl mx-auto pl-8">
            <h2 className="text-9xl md:text-[12rem] font-black text-white tracking-wide mb-4">
              <span className="block leading-[0.85]">Discover</span>
              <span className="block leading-[0.95]">your</span>
              <span className="block leading-[0.95]">Wine</span>
            </h2>
            <p className="text-base text-white/85 max-w-2xl font-light -mt-4">
              Whether you're a complete beginner or looking to expand your knowledge,<br />
              we'll help you learn about wines and find your perfect match.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mt-24 pl-8">
            <Card 
              className={`bubble-button cursor-pointer transition-all min-h-[400px] flex flex-col justify-between ${learnBubble ? 'bubbleanimation' : ''}`}
              onClick={handleLearnClick}
            >
              <div className="mt-6 ml-6">
                <BookOpen className="h-10 w-10 text-white drop-shadow-lg" />
              </div>
              <CardHeader>
                <CardTitle className="text-5xl font-bold text-white drop-shadow-lg mb-4">Learn About Wine</CardTitle>
                <CardDescription className="text-lg text-white/80 drop-shadow font-light">
                  Explore comprehensive guides on wine colors, grape varieties, regions, 
                  food pairing, and proper tasting techniques.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className={`bubble-button cursor-pointer transition-all min-h-[400px] flex flex-col justify-between ${recoBubble ? 'bubbleanimation' : ''}`}
              onClick={handleRecoClick}
            >
              <div className="mt-6 ml-6">
                <Sparkles className="h-10 w-10 text-white drop-shadow-lg" />
              </div>
              <CardHeader>
                <CardTitle className="text-5xl font-bold text-white drop-shadow-lg mb-4">Get Recommendations</CardTitle>
                <CardDescription className="text-lg text-white/80 drop-shadow font-light">
                  Take a short quiz about your taste preferences and receive personalized 
                  wine recommendations tailored just for you.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </main>

        <footer className="border-t-2 border-white/40 bubble-header mt-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <p className="text-white/90 font-medium">MDIA 3106 - Design 3 - Course Project</p>
              <p className="text-white/80">Hajin Lee set-F A01403665</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

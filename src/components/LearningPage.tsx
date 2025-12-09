import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { learningTopics } from '@/data/learningTopics';
import { LearningTopic } from '@/types/learning';
import { ArrowLeft, BookOpen, GlassWater, Grape, UtensilsCrossed, Wine } from 'lucide-react';

interface LearningPageProps {
  onNavigate: (page: 'home' | 'learn' | 'recommendations') => void;
}

export function LearningPage({ onNavigate }: LearningPageProps) {
  const [selectedTopic, setSelectedTopic] = useState<LearningTopic | null>(null);

  const categoryIcons = {
    basics: BookOpen,
    varieties: Grape,
    pairing: UtensilsCrossed,
    tasting: GlassWater,
    winemaking: Wine
  };

  const categoryColors = {
    basics: 'bg-blue-100 text-blue-800 border-blue-300',
    varieties: 'bg-purple-100 text-purple-800 border-purple-300',
    pairing: 'bg-orange-100 text-orange-800 border-orange-300',
    tasting: 'bg-pink-100 text-pink-800 border-pink-300',
    winemaking: 'bg-green-100 text-green-800 border-green-300'
  };

  if (selectedTopic) {
    const Icon = categoryIcons[selectedTopic.category];
    
    return (
      <>
        <div className="learning-background">
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
        
        <div className="min-h-screen relative z-10 overflow-y-auto">
          <header className="border-b-2 border-white/40 bubble-header sticky top-0 z-40">
            <div className="container mx-auto px-4 py-4">
              <Button 
                type="button"
                variant="ghost" 
                onClick={() => setSelectedTopic(null)}
                className="mb-2 text-white hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Topics
              </Button>
              <div className="flex items-start gap-3">
                <Icon className="h-8 w-8 text-white shrink-0 mt-1" />
                <div>
                  <h1 className="text-2xl font-bold text-white">{selectedTopic.title}</h1>
                  <p className="text-sm text-white/80">{selectedTopic.description}</p>
                </div>
              </div>
            </div>
          </header>

          <main className="container mx-auto px-4 py-8 pb-16">
            <div className="max-w-7xl mx-auto space-y-6">
              {/* Check if this is Wine Tasting & Serving topic */}
              {selectedTopic.id === '4' ? (
                <>
                  {/* Horizontal scrollable tasting steps */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Tasting Process</h2>
                    <div className="relative">
                      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                        {selectedTopic.content.sections
                          .filter(s => s.heading.startsWith('Step'))
                          .map((section, index) => (
                            <Card 
                              key={index} 
                              className="backdrop-blur-md bg-white/10 border-white/20 min-w-[320px] md:min-w-[420px] snap-start"
                            >
                              <CardContent className="p-6">
                                <div className="flex flex-col items-center mb-4">
                                  {(section as any).image && (
                                    <img 
                                      src={(section as any).image} 
                                      alt={section.heading} 
                                      className="w-[220px] h-[220px] object-contain mb-4" 
                                    />
                                  )}
                                  <h3 className="text-xl font-bold text-white text-left w-full">{section.heading}</h3>
                                </div>
                                <p className="text-white/80 leading-relaxed">{section.text}</p>
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                    </div>
                  </div>

                  {/* Temperature sections displayed with images */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">Serving Temperature</h2>
                      <p className="text-white/90 leading-relaxed">
                        Temperature dramatically affects how wine tastes. Serve too cold, and aromas and flavors are muted—you won't smell anything and fruit flavors disappear. Serve too warm, and alcohol becomes pronounced making the wine taste hot and flabby, with acidity seeming lower. Proper serving temperature allows the wine to express its true character, with balanced aromas, flavors, and structure. When in doubt, err on the cooler side—wine warms quickly in the glass.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      {selectedTopic.content.sections
                        .filter(s => !s.heading.startsWith('Step') && s.heading !== 'Sparkling')
                        .map((section, index) => {
                          const wineType = section.heading; // 'White', 'Rosé', or 'Red'
                          const imageMap: { [key: string]: string } = {
                            'White': '/assets/White.png',
                            'Rosé': '/assets/Rose.png',
                            'Red': '/assets/Red.png'
                          };
                          const colorMap: { [key: string]: string } = {
                            'White': 'bg-yellow-600/15 border-yellow-300/30',
                            'Rosé': 'bg-pink-700/20 border-pink-300/30',
                            'Red': 'bg-red-900/20 border-red-400/30'
                          };
                          const titleColorMap: { [key: string]: string } = {
                            'White': 'text-yellow-200',
                            'Rosé': 'text-pink-200',
                            'Red': 'text-red-300'
                          };
                          
                          return (
                            <Card 
                              key={index} 
                              className={`backdrop-blur-md ${colorMap[wineType] || 'bg-white/10 border-white/20'}`}
                            >
                              <CardContent className="p-6">
                                <div className="flex items-end gap-4 mb-6">
                                  {imageMap[wineType] && (
                                    <img 
                                      src={imageMap[wineType]} 
                                      alt={`${wineType} Wine`} 
                                      className="w-[120px] h-[120px] object-contain" 
                                    />
                                  )}
                                  <div className="pb-2">
                                    <h3 className={`text-2xl font-bold ${titleColorMap[wineType] || 'text-white'}`}>
                                      {wineType} Wines
                                    </h3>
                                    {(section as any).temperature && (
                                      <p className={`text-lg ${titleColorMap[wineType] || 'text-white/80'}`}>
                                        {(section as any).temperature}
                                      </p>
                                    )}
                                  </div>
                                </div>
                                <p className="text-white/80 leading-relaxed">{section.text}</p>
                              </CardContent>
                            </Card>
                          );
                        })}
                    </div>
                  </div>
                </>
              ) : selectedTopic.id === '2' ? (
                // How Wine is Made - Horizontal scrollable steps
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-white">Winemaking Process</h2>
                  <div className="relative">
                    <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                      {selectedTopic.content.sections.map((section, index) => (
                        <Card 
                          key={index} 
                          className="backdrop-blur-md bg-white/20 border-white/30 min-w-[320px] md:min-w-[420px] snap-start min-h-[500px] flex flex-col"
                        >
                          <CardContent className="p-6 flex flex-col flex-1">
                            <div className="flex flex-col items-center mb-4">
                              {(section as any).image && (
                                <img 
                                  src={(section as any).image} 
                                  alt={section.heading} 
                                  className="w-[220px] h-[220px] object-contain mb-4" 
                                />
                              )}
                              <div className="h-[60px] flex items-center justify-start w-full">
                                <h3 className="text-xl font-bold text-white text-left">{section.heading}</h3>
                              </div>
                            </div>
                            <p className="text-white/80 leading-relaxed">{section.text}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              ) : selectedTopic.id === '1' ? (
                <>
                  {/* Group sections by wine type */}
                  {(() => {
                    const redSections = selectedTopic.content.sections.filter(s => s.heading.startsWith('Red'));
                    const whiteSections = selectedTopic.content.sections.filter(s => s.heading.startsWith('White'));
                    const roseSections = selectedTopic.content.sections.filter(s => s.heading.startsWith('Rosé'));
                    
                    return (
                      <>
                        {/* Red Wines Section */}
                        {redSections.length > 0 && (
                      <Card className="backdrop-blur-md bg-red-900/20 border-red-400/30">
                        <CardContent className="p-6">
                          <div className="flex items-end gap-4 mb-10">
                            <img src="/assets/Red.png" alt="Red Wine" className="w-[120px] h-[120px] object-contain" />
                            <h2 className="text-3xl font-bold text-red-300 pb-2">Red Wines</h2>
                          </div>
                          <div className="space-y-6">
                            {redSections.map((section, index) => (
                              <div key={index} className="border-b border-red-400/20 last:border-0 pb-6 last:pb-0">
                                <h3 className="text-xl font-semibold mb-3 text-red-200">{section.heading.replace('Red — ', '')}</h3>
                                <p className="text-white/80 leading-relaxed mb-3">{section.text}</p>
                                {section.grapeVarieties && section.grapeVarieties.length > 0 && (
                                  <div className="mt-3">
                                    <p className="text-sm font-medium mb-2 text-red-200">Key Grape Varieties:</p>
                                    <div className="flex flex-wrap gap-2">
                                      {section.grapeVarieties.map((grape) => (
                                        <Badge 
                                          key={grape} 
                                          variant="secondary" 
                                          className="text-sm px-3 py-1 bg-red-500/30 text-red-100 border-red-400/40 cursor-pointer hover:bg-red-500/50 transition-colors"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(`https://www.google.com/search?q=${encodeURIComponent(grape + ' wine grape')}`, '_blank');
                                          }}
                                        >
                                          {grape}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* White Wines Section */}
                    {whiteSections.length > 0 && (
                      <Card className="backdrop-blur-md bg-yellow-600/15 border-yellow-300/30">
                        <CardContent className="p-6">
                          <div className="flex items-end gap-4 mb-10">
                            <img src="/assets/White.png" alt="White Wine" className="w-[120px] h-[120px] object-contain" />
                            <h2 className="text-3xl font-bold text-yellow-200 pb-2">White Wines</h2>
                          </div>
                          <div className="space-y-6">
                            {whiteSections.map((section, index) => (
                              <div key={index} className="border-b border-yellow-300/20 last:border-0 pb-6 last:pb-0">
                                <h3 className="text-xl font-semibold mb-3 text-yellow-100">{section.heading.replace('White — ', '')}</h3>
                                <p className="text-white/80 leading-relaxed mb-3">{section.text}</p>
                                {section.grapeVarieties && section.grapeVarieties.length > 0 && (
                                  <div className="mt-3">
                                    <p className="text-sm font-medium mb-2 text-yellow-100">Key Grape Varieties:</p>
                                    <div className="flex flex-wrap gap-2">
                                      {section.grapeVarieties.map((grape) => (
                                        <Badge 
                                          key={grape} 
                                          variant="secondary" 
                                          className="text-sm px-3 py-1 bg-yellow-500/30 text-yellow-50 border-yellow-400/40 cursor-pointer hover:bg-yellow-500/50 transition-colors"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(`https://www.google.com/search?q=${encodeURIComponent(grape + ' wine grape')}`, '_blank');
                                          }}
                                        >
                                          {grape}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Rosé Wines Section */}
                    {roseSections.length > 0 && (
                      <Card className="backdrop-blur-md bg-pink-700/20 border-pink-300/30">
                        <CardContent className="p-6">
                          <div className="flex items-end gap-4 mb-10">
                            <img src="/assets/Rose.png" alt="Rosé Wine" className="w-[120px] h-[120px] object-contain" />
                            <h2 className="text-3xl font-bold text-pink-200 pb-2">Rosé Wines</h2>
                          </div>
                          <div className="space-y-6">
                            {roseSections.map((section, index) => (
                              <div key={index} className="border-b border-pink-300/20 last:border-0 pb-6 last:pb-0">
                                <h3 className="text-xl font-semibold mb-3 text-pink-100">{section.heading.replace('Rosé — ', '')}</h3>
                                <p className="text-white/80 leading-relaxed mb-3">{section.text}</p>
                                {section.grapeVarieties && section.grapeVarieties.length > 0 && (
                                  <div className="mt-3">
                                    <p className="text-sm font-medium mb-2 text-pink-100">Key Grape Varieties:</p>
                                    <div className="flex flex-wrap gap-2">
                                      {section.grapeVarieties.map((grape) => (
                                        <Badge 
                                          key={grape} 
                                          variant="secondary" 
                                          className="text-sm px-3 py-1 bg-pink-500/30 text-pink-50 border-pink-400/40 cursor-pointer hover:bg-pink-500/50 transition-colors"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(`https://www.google.com/search?q=${encodeURIComponent(grape + ' wine grape')}`, '_blank');
                                          }}
                                        >
                                          {grape}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Other sections (if any) */}
                    {selectedTopic.content.sections.filter(s => 
                      !s.heading.startsWith('Red') && 
                      !s.heading.startsWith('White') && 
                      !s.heading.startsWith('Rosé')
                    ).length > 0 && (
                      <Card className="backdrop-blur-md bg-white/10 border-white/20">
                        <CardContent className="p-6">
                          <div className="space-y-6">
                            {selectedTopic.content.sections.filter(s => 
                              !s.heading.startsWith('Red') && 
                              !s.heading.startsWith('White') && 
                              !s.heading.startsWith('Rosé')
                            ).map((section, index) => (
                              <div key={index}>
                                <h3 className="text-xl font-semibold mb-3 text-white">{section.heading}</h3>
                                <p className="text-white/80 leading-relaxed mb-3">{section.text}</p>
                                {section.grapeVarieties && section.grapeVarieties.length > 0 && (
                                  <div className="mt-3">
                                    <p className="text-sm font-medium mb-2 text-white">Key Grape Varieties:</p>
                                    <div className="flex flex-wrap gap-2">
                                      {section.grapeVarieties.map((grape) => (
                                        <Badge 
                                          key={grape} 
                                          variant="secondary" 
                                          className="text-sm px-3 py-1 bg-white/20 text-white border-white/30 cursor-pointer hover:bg-white/30 transition-colors"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(`https://www.google.com/search?q=${encodeURIComponent(grape + ' wine grape')}`, '_blank');
                                          }}
                                        >
                                          {grape}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </>
                );
              })()}
              </>
              ) : null}
            </div>
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="learning-background">
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
      
      <div className="min-h-screen relative z-10">
        <header className="border-b-2 border-white/40 bubble-header sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <Button 
              type="button"
              variant="ghost" 
              onClick={() => onNavigate('home')}
              className="mb-2 text-white hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-white">Wine Education</h1>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {learningTopics.filter(topic => topic.id !== '3').map((topic) => {
              const Icon = categoryIcons[topic.category];
              
              return (
                <Card 
                  key={topic.id} 
                  className="bubble-button cursor-pointer transition-all backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/20 flex flex-col h-[280px]"
                  onClick={() => setSelectedTopic(topic)}
                >
                  <div className="mt-6 ml-6">
                    <Icon className="h-12 w-12 text-white drop-shadow-lg" />
                  </div>
                  <CardHeader className="mt-auto text-right">
                    <CardTitle className="text-4xl font-bold text-white drop-shadow-lg mb-3">{topic.title}</CardTitle>
                    <CardDescription className="text-lg text-white/80 drop-shadow font-light">
                      {topic.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}

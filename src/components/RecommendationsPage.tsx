import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import { quizQuestions } from '@/data/quizQestions';
import { QuizAnswers, WineRecommendation } from '@/types/recommendations';
import { generateRecommendations } from '@/utils/recommendationsEngine';
import { ArrowLeft, ArrowRight, CheckCircle2, Wine, Copy, Search, ExternalLink } from 'lucide-react';

interface RecommendationsPageProps {
  onNavigate: (page: 'home' | 'learn' | 'recommendations') => void;
}

export function RecommendationsPage({ onNavigate }: RecommendationsPageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [recommendations, setRecommendations] = useState<WineRecommendation[] | null>(null);

  const currentQuestion = quizQuestions[currentStep];
  const progress = ((currentStep + 1) / quizQuestions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleMultipleAnswer = (value: string, checked: boolean) => {
    const current = (answers[currentQuestion.id] as string[]) || [];
    if (checked) {
      setAnswers({ ...answers, [currentQuestion.id]: [...current, value] });
    } else {
      setAnswers({ ...answers, [currentQuestion.id]: current.filter(v => v !== value) });
    }
  };

  const canProceed = () => {
    const answer = answers[currentQuestion.id];
    if (currentQuestion.type === 'multiple') {
      return Array.isArray(answer) && answer.length > 0;
    }
    return !!answer;
  };

  const handleNext = () => {
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const results = generateRecommendations(answers);
      setRecommendations(results);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setRecommendations(null);
  };

  if (recommendations) {
    return (
      <>
        <div className="recommendations-background">
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
        
        <div className="min-h-screen relative z-10">
          <header className="border-b-2 border-white/40 bubble-header sticky top-0 z-40">
            <div className="container mx-auto px-4 py-4">
              <Button 
                type="button"
                variant="ghost" 
                onClick={() => onNavigate('home')}
                className="mb-2 text-emerald-900 hover:bg-emerald-50"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-emerald-900">Your Wine Recommendations</h1>
                <p className="text-sm text-emerald-800">Based on your preferences</p>
              </div>
            </div>
          </header>

          <main className="container mx-auto px-4 py-8">
            {recommendations.length === 0 ? (
              <Card className="max-w-2xl mx-auto backdrop-blur-md bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <div className="text-center py-8">
                    <p className="text-lg text-emerald-900 mb-4">
                      We couldn't find wines matching all your preferences. Try adjusting your criteria.
                    </p>
                    <Button type="button" onClick={handleRestart} className="bg-emerald-700 hover:bg-emerald-800 text-white border-emerald-700">
                      Retake Quiz
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <>
                <div className="text-center mb-8">
                  <CheckCircle2 className="h-16 w-16 text-emerald-600 mx-auto mb-4 drop-shadow-lg" />
                  <h2 className="text-3xl font-bold mb-2 text-emerald-900 drop-shadow-lg">Perfect Matches Found!</h2>
                </div>

                <div className="flex flex-col gap-4 max-w-4xl mx-auto">
                  {recommendations.map((rec) => (
                    <Card 
                      key={rec.wine.id} 
                      className="backdrop-blur-md bg-white/10 border-white/20"
                    >
                      <div className="flex flex-col md:flex-row gap-6 p-6">
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2">
                              <Wine className="h-6 w-6 text-emerald-600 shrink-0" />
                              <CardTitle className="text-emerald-900 text-xl">{rec.wine.name}</CardTitle>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigator.clipboard.writeText(rec.wine.name);
                                }}
                                className="text-xs text-emerald-700 hover:text-emerald-900 underline ml-2"
                              >
                                copy
                              </button>
                            </div>
                            <Badge variant="default" className="bg-emerald-600 text-white border-0 shrink-0">
                              {rec.matchPercentage}% Match
                            </Badge>
                          </div>
                          <CardDescription className="text-emerald-800 mb-4">
                            {rec.wine.region}, {rec.wine.country}
                          </CardDescription>
                          
                          <div className="flex gap-4 mb-4">
                            <div>
                              <span className="text-sm font-medium text-emerald-800">Type: </span>
                              <Badge variant="outline" className="bg-white/50 text-emerald-900 border-emerald-600/30">
                                {rec.wine.type.charAt(0).toUpperCase() + rec.wine.type.slice(1)}
                              </Badge>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-emerald-800">Price: </span>
                              <span className="text-lg font-bold text-emerald-900">${rec.wine.price}</span>
                            </div>
                          </div>

                          <p className="text-sm text-emerald-800 mb-4">
                            {rec.wine.description}
                          </p>

                          <div className="flex flex-wrap gap-3">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(`https://www.google.com/search?q=${encodeURIComponent(rec.wine.name + ' wine')}`, '_blank');
                              }}
                              className="bg-white/80 hover:bg-emerald-50 text-emerald-900 border-emerald-600/30"
                            >
                              <Search className="h-4 w-4 mr-2" />
                              Browse on Google
                            </Button>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open('https://www.bcliquorstores.com', '_blank');
                              }}
                              className="bg-white/80 hover:bg-emerald-50 text-emerald-900 border-emerald-600/30"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              BC Liquor Stores
                            </Button>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open('https://www.vivino.com/', '_blank');
                              }}
                              className="bg-white/80 hover:bg-emerald-50 text-emerald-900 border-emerald-600/30"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              VIVINO
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-12 mb-8">
                  <Button 
                    type="button"
                    onClick={handleRestart}
                    className="bg-emerald-700 hover:bg-emerald-800 text-white border-emerald-700 px-8 py-6 text-lg font-semibold"
                  >
                    Retake Quiz
                  </Button>
                </div>
              </>
            )}
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="recommendations-background">
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
              <h1 className="text-2xl font-bold text-white">Wine Recommendation Quiz</h1>
              <p className="text-sm text-white/80">
                Question {currentStep + 1} of {quizQuestions.length}
              </p>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Card className="max-w-4xl mx-auto backdrop-blur-md bg-white/10 border-white/20">
            <CardHeader>
              <Progress value={progress} className="mb-4 wave-progress" />
              <CardTitle className="text-4xl text-emerald-900 font-bold">{currentQuestion.question}</CardTitle>
              {currentQuestion.type === 'multiple' && (
                <CardDescription className="text-xl text-emerald-800 mt-2">Select all that apply</CardDescription>
              )}
            </CardHeader>
            <CardContent className="p-6">
              {currentQuestion.type === 'single' ? (
                <div className="grid gap-3">
                  {currentQuestion.options.map((option: { value: string; label: string }) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className={`px-6 py-4 text-left rounded-lg border-2 transition-all text-lg font-medium ${
                        answers[currentQuestion.id] === option.value
                          ? 'bg-emerald-700 border-emerald-700 text-white shadow-lg'
                          : 'bg-white/80 border-emerald-600/30 text-emerald-900 hover:bg-emerald-50 hover:border-emerald-600'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="grid gap-3">
                  {currentQuestion.options.map((option: { value: string; label: string }) => {
                    const isChecked = ((answers[currentQuestion.id] as string[]) || []).includes(option.value);
                    
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleMultipleAnswer(option.value, !isChecked)}
                        className={`px-6 py-4 text-left rounded-lg border-2 transition-all text-lg font-medium ${
                          isChecked
                            ? 'bg-emerald-700 border-emerald-700 text-white shadow-lg'
                            : 'bg-white/80 border-emerald-600/30 text-emerald-900 hover:bg-emerald-50 hover:border-emerald-600'
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              )}

              <div className="flex items-center justify-between mt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="bg-white/80 hover:bg-emerald-50 text-emerald-900 border-emerald-600/30 disabled:opacity-50 text-lg font-medium"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Previous
                </Button>
                <Button
                  type="button"
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white border-emerald-700 disabled:opacity-50 text-lg font-medium"
                >
                  {currentStep === quizQuestions.length - 1 ? 'Get Recommendations' : 'Next'}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  );
}

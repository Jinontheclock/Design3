export interface QuizQuestion {
  id: string;
  question: string;
  type: 'single' | 'multiple';
  options: {
    value: string;
    label: string;
  }[];
}

export interface QuizAnswers {
  [key: string]: string | string[];
}

export interface WineRecommendation {
  wine: {
    id: string;
    name: string;
    type: 'red' | 'white' | 'rose' | 'sparkling';
    region: string;
    country: string;
    price: number;
    description: string;
  };
  matchPercentage: number;
  reasons: string[];
}

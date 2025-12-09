import { QuizQuestion } from '@/types/recommendations';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'wineType',
    question: 'Which wine color do you prefer?',
    type: 'single',
    options: [
      { value: 'red', label: 'Red Wine' },
      { value: 'white', label: 'White Wine' },
      { value: 'rose', label: 'Rosé Wine' },
      { value: 'any', label: 'No preference' }
    ]
  },
  {
    id: 'sweetness',
    question: 'How do you like your wine?',
    type: 'single',
    options: [
      { value: 'dry', label: 'Dry (not sweet)' },
      { value: 'offDry', label: 'Off-dry (slightly sweet)' },
      { value: 'sweet', label: 'Sweet' },
      { value: 'any', label: 'No preference' }
    ]
  },
  {
    id: 'body',
    question: 'What body do you prefer?',
    type: 'single',
    options: [
      { value: 'light', label: 'Light-bodied (delicate, easy to drink)' },
      { value: 'medium', label: 'Medium-bodied (balanced)' },
      { value: 'full', label: 'Full-bodied (rich, bold)' },
      { value: 'any', label: 'No preference' }
    ]
  },
  {
    id: 'flavors',
    question: 'Which flavor profiles appeal to you? (Select all that apply)',
    type: 'multiple',
    options: [
      { value: 'fruity', label: 'Fruity (berries, citrus, tropical)' },
      { value: 'floral', label: 'Floral (roses, violets)' },
      { value: 'earthy', label: 'Earthy (mushroom, leather, tobacco)' },
      { value: 'spicy', label: 'Spicy (pepper, cinnamon, clove)' },
      { value: 'oaky', label: 'Oaky (vanilla, toast, butter)' },
      { value: 'mineral', label: 'Mineral (stone, chalk, sea salt)' }
    ]
  },
  {
    id: 'priceRange',
    question: 'What\'s your preferred price range?',
    type: 'single',
    options: [
      { value: 'budget', label: 'Budget-friendly (Under $25)' },
      { value: 'mid', label: 'Mid-range ($25-$50)' },
      { value: 'premium', label: 'Premium ($50-$100)' },
      { value: 'luxury', label: 'Luxury (Over $100)' },
      { value: 'any', label: 'No preference' }
    ]
  }
];

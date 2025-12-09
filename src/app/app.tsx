import { useState } from 'react';
import { HomePage } from '@/components/HomePage';
import { LearningPage } from '@/components/LearningPage';
import { RecommendationsPage } from '@/components/RecommendationsPage';

type Page = 'home' | 'learn' | 'recommendations';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  if (currentPage === 'learn') {
    return <LearningPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'recommendations') {
    return <RecommendationsPage onNavigate={handleNavigate} />;
  }

  return <HomePage onNavigate={handleNavigate} />;
}

export default App;
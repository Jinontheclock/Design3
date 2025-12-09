import { wines } from '@/data/wines';
import { QuizAnswers, WineRecommendation } from '@/types/recommendations';

export function generateRecommendations(answers: QuizAnswers): WineRecommendation[] {
  const scoredWines = wines.map(wine => {
    let score = 0;
    const reasons: string[] = [];

    const wineType = answers.wineType as string;
    if (wineType && wineType !== 'any') {
      if (wine.type === wineType) {
        score += 30;
        reasons.push(`Matches your preferred ${wineType} wine type`);
      } else {
        return null;
      }
    }

    const priceRange = answers.priceRange as string;
    if (priceRange && priceRange !== 'any') {
      let priceMatch = false;
      if (priceRange === 'budget' && wine.price < 25) priceMatch = true;
      if (priceRange === 'mid' && wine.price >= 25 && wine.price <= 50) priceMatch = true;
      if (priceRange === 'premium' && wine.price > 50 && wine.price <= 100) priceMatch = true;
      if (priceRange === 'luxury' && wine.price > 100) priceMatch = true;

      if (priceMatch) {
        score += 20;
        reasons.push('Within your preferred price range');
      } else {
        score -= 10;
      }
    }

    const body = answers.body as string;
    if (body && body !== 'any') {
      const description = wine.description.toLowerCase();
      const tastingNotes = wine.tastingNotes.palate.toLowerCase();
      
      if (body === 'light' && (description.includes('light') || tastingNotes.includes('light') || wine.alcoholContent < 12.5)) {
        score += 15;
        reasons.push('Light-bodied as you prefer');
      } else if (body === 'medium' && wine.alcoholContent >= 12.5 && wine.alcoholContent <= 13.5) {
        score += 15;
        reasons.push('Medium-bodied for balanced taste');
      } else if (body === 'full' && (description.includes('full') || tastingNotes.includes('full') || wine.alcoholContent > 13.5)) {
        score += 15;
        reasons.push('Full-bodied for rich, bold flavors');
      }
    }

    const flavors = answers.flavors as string[];
    if (flavors && flavors.length > 0) {
      const wineText = `${wine.description} ${wine.tastingNotes.nose} ${wine.tastingNotes.palate}`.toLowerCase();
      
      flavors.forEach(flavor => {
        let matched = false;
        if (flavor === 'fruity' && (wineText.includes('fruit') || wineText.includes('berry') || wineText.includes('citrus') || wineText.includes('cherry') || wineText.includes('apple'))) {
          matched = true;
        } else if (flavor === 'floral' && (wineText.includes('floral') || wineText.includes('flower') || wineText.includes('rose') || wineText.includes('violet'))) {
          matched = true;
        } else if (flavor === 'earthy' && (wineText.includes('earth') || wineText.includes('mushroom') || wineText.includes('leather') || wineText.includes('tobacco'))) {
          matched = true;
        } else if (flavor === 'spicy' && (wineText.includes('spice') || wineText.includes('pepper') || wineText.includes('cinnamon'))) {
          matched = true;
        } else if (flavor === 'oaky' && (wineText.includes('oak') || wineText.includes('vanilla') || wineText.includes('toast') || wineText.includes('butter'))) {
          matched = true;
        } else if (flavor === 'mineral' && (wineText.includes('mineral') || wineText.includes('stone') || wineText.includes('chalk') || wineText.includes('saline') || wineText.includes('flint'))) {
          matched = true;
        }

        if (matched) {
          score += 10;
          reasons.push(`Features ${flavor} notes you enjoy`);
        }
      });
    }

    const sweetness = answers.sweetness as string;
    if (sweetness && sweetness !== 'any') {
      const description = wine.description.toLowerCase();
      const palate = wine.tastingNotes.palate.toLowerCase();
      
      if (sweetness === 'dry' && (description.includes('dry') || palate.includes('dry'))) {
        score += 10;
        reasons.push('Dry style as you prefer');
      } else if (sweetness === 'offDry' && (description.includes('off-dry') || palate.includes('off-dry'))) {
        score += 10;
        reasons.push('Slightly sweet to match your taste');
      }
    }

    if (score < 20) return null;

    const matchPercentage = Math.min(Math.round((score / 100) * 100), 99);

    return {
      wine: {
        id: wine.id,
        name: wine.name,
        type: wine.type,
        region: wine.region,
        country: wine.country,
        price: wine.price,
        description: wine.description
      },
      matchPercentage,
      reasons
    };
  }).filter((item): item is WineRecommendation => item !== null);

  return scoredWines
    .sort((a, b) => b.matchPercentage - a.matchPercentage)
    .slice(0, 6);
}

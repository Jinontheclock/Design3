export interface Wine {
  id: string;
  name: string;
  type: 'red' | 'white' | 'rose' | 'sparkling';
  region: string;
  country: string;
  grapeVarieties: string[];
  price: number;
  image: string;
  alcoholContent: number;
  vintage?: number;
  tastingNotes: {
    appearance: string;
    nose: string;
    palate: string;
    finish: string;
  };
  foodPairings: string[];
  servingTemperature: string;
  description: string;
}

export interface LearningTopic {
  id: string;
  title: string;
  description: string;
  category: 'basics' | 'varieties' | 'pairing' | 'tasting' | 'winemaking';
  content: {
    sections: {
      heading: string;
      text: string;
      grapeVarieties?: string[];
      image?: string;
      temperature?: string;
    }[];
    keyPoints: string[];
  };
}

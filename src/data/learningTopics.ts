import { LearningTopic } from '@/types/learning';

export const learningTopics: LearningTopic[] = [
  {
    id: '1',
    title: 'Wine Types & Grape Varieties',
    description: 'Understand wine colors, their characteristics, and the grape varieties that define them',
    category: 'varieties',
    content: {
      sections: [
        {
          heading: 'Red — Full-bodied / Rich / Bold Red Wines',
          text: 'Full body, rich structure, higher tannin and pigment; dark fruit flavours, often age-worthy. Cabernet Sauvignon dark fruit (blackcurrant, blackberry, plum), often with spice, cedar/tobacco or oak-age complexity, strong tannin and aging potential. Syrah / Shiraz bold, often peppery or spicy, dark berry or plum flavors, sometimes smoky or savory notes. Malbec rich and fruit-forward, dark fruits (blackberry, plum), with smoother tannins, often good value and approachable. Tempranillo medium-to-full body depending on style/aging; red/black fruit (cherry, plum), sometimes earthy, leather or spice notes, common in Spanish reds.',
          grapeVarieties: ['Cabernet Sauvignon', 'Syrah/Shiraz', 'Malbec', 'Tempranillo', 'Montepulciano', 'Aglianico', 'Nero d\'Avola', 'Tannat', 'Zinfandel']
        },
        {
          heading: 'Red — Medium-bodied / Medium Red Wines',
          text: 'Medium body and tannin, more balanced, easier to drink than heavy reds, versatile with food. Merlot softer and rounder than bold reds, smoother tannins, red/black fruit (plum, cherry), often more approachable and food-friendly. Sangiovese lighter-to-medium body, red fruits (cherry, strawberry), often tart acidity and herbal or earthy notes, common in Italian styles. Grenache (Garnacha) medium body, often red berry or red fruit flavours, sometimes with spice or herbal notes; used widely especially in Mediterranean blends.',
          grapeVarieties: ['Merlot', 'Sangiovese', 'Grenache', 'Cabernet Franc', 'Barbera']
        },
        {
          heading: 'Red — Light-bodied / Light Red Wines',
          text: 'Light body, low-to-moderate tannin, brighter acidity, more delicate flavours, good entry for beginners or lighter meals. Pinot Noir light-to-medium body, red fruit (cherry, raspberry), sometimes earthy or floral notes; elegant and expressive of terroir. Other light red varieties include Gamay, Cinsault, Schiava, and Brachetto, many grapes producing lighter reds, often with bright fruit and low tannin, very approachable.',
          grapeVarieties: ['Pinot Noir', 'Gamay', 'Cinsault', 'Schiava', 'Brachetto']
        },
        {
          heading: 'White — Light-bodied / Fresh / Crisp White Wines',
          text: 'Light body, high acidity or freshness, often fruity or floral, easy-drinking; generally no heavy tannin or oak-derived complexity. Sauvignon Blanc crisp acidity, citrus/green apple/herbaceous or grassy aromas, great as a refreshing, food-friendly white. Pinot Grigio / Pinot Gris light and easy-drinking, often with fresh fruit or floral notes, gentle and uncomplicated.',
          grapeVarieties: ['Sauvignon Blanc', 'Pinot Grigio/Gris', 'Albariño', 'Vermentino', 'Vinho Verde']
        },
        {
          heading: 'White — Medium to Full-bodied / Rich White Wines',
          text: 'More body and texture, sometimes oak-aged or with creamy/rounded mouthfeel; can have deeper flavours, complexity, sometimes good for aging. Chardonnay very versatile from crisp & unoaked to rich, oaky, buttery or creamy (especially if barrel-aged or using malolactic fermentation). Viognier, certain blends or local white grapes (depending on region) can produce aromatic, fuller-bodied whites with texture and richness.',
          grapeVarieties: ['Chardonnay', 'Viognier', 'Chenin Blanc', 'Gewürztraminer', 'Riesling']
        },
        {
          heading: 'Rosé — Light / Medium-bodied Pink Wines',
          text: 'Light to medium body; often fruity, fresh or floral; less tannin than reds; can be dry or slightly sweet, often refreshing and versatile. Made from red-skinned grapes but with short skin contact (just long enough to impart a pink hue, not heavy tannins). Typical flavour profile: red berries (strawberry, raspberry, cherry), sometimes citrus or floral notes; balanced acidity, easy to drink, often served chilled.',
          grapeVarieties: ['Grenache', 'Syrah', 'Sangiovese', 'Pinot Noir', 'Mourvèdre', 'Cinsault']
        }
      ],
      keyPoints: [
        'Full-bodied reds: rich structure, high tannin, dark fruit, age-worthy (Cabernet, Syrah, Malbec)',
        'Medium-bodied reds: balanced, versatile, approachable (Merlot, Sangiovese, Grenache)',
        'Light-bodied reds: delicate, low tannin, bright fruit (Pinot Noir, Gamay)',
        'Light-bodied whites: crisp, high acidity, refreshing (Sauvignon Blanc, Pinot Grigio)',
        'Full-bodied whites: rich, sometimes oaky, complex (Chardonnay, Viognier)',
        'Rosé: pink color from brief skin contact, fruity and versatile',
        'Body and tannin levels determine food pairing and drinkability',
        'Different grape varieties produce distinct flavor profiles and structures'
      ]
    }
  },
  {
    id: '2',
    title: 'How Wine is Made',
    description: 'Discover the winemaking process from grape to glass',
    category: 'winemaking',
    content: {
      sections: [
        {
          heading: 'Step 1: Harvest the Grapes',
          text: 'Red wine starts with black (dark-skinned) grapes. All the red color and much of the structure of red wine comes from pigment (anthocyanins) in grape skins. Grapes must be harvested at optimal ripeness. Picking too early produces thin, tart wines; too late can lead to overripe, flabby wines.',
          image: '/assets/Graphe.png'
        },
        {
          heading: 'Step 2: Prepare Grapes (Destem & Crush / Pre-Fermentation Setup)',
          text: 'Once harvested, grapes go to the winery. Winemakers choose whether to remove stems (destemming) or ferment whole clusters. Destemming removes bitter or harsh vegetal compounds that stems can contribute; leaving stems (or whole clusters) can add additional tannin and complexity — a stylistic choice. Grapes are crushed to release juice (along with skins, seeds — this mixture called the "must").',
          image: '/assets/prepare.png'
        },
        {
          heading: 'Step 3: Alcoholic Fermentation with Skin Contact (Maceration + Ferment)',
          text: 'In red winemaking, fermentation is done with skins (and seeds/stems, depending on the decision) — unlike white wine where juice is separated from skins before fermentation. This skin contact during fermentation is key for extracting color, tannins, and flavor compounds. Yeast (added or natural) eats grape sugar and converts it into alcohol and CO₂. During fermentation, winemakers often use techniques like "pump-over" (pumping juice over the floating skins) or "punch-down" (pushing the skin cap back into the juice) to ensure skins remain in contact with juice — affecting extraction intensity, structure, and style.',
          image: '/assets/fermentation.png'
        },
        {
          heading: 'Step 4: Pressing (After Fermentation)',
          text: 'Once fermentation (sugar → alcohol) is done (typically within a few days to a few weeks), the freely running wine ("free-run juice") is drained off. Then, the remaining skins/seeds are pressed to extract more wine (called "pressed wine"). This usually adds extra ~15% volume. Pressing after fermentation (rather than before) allows maximal extraction of color, tannin, and flavor from skins — essential for red wine\'s depth and structure.',
          image: '/assets/Press.png'
        },
        {
          heading: 'Step 5: Malolactic Fermentation (Secondary Fermentation / Softening)',
          text: 'Most red wines go through a secondary process called Malolactic fermentation (MLF), where harsh malic acid is converted by bacteria into softer lactic acid — softening acidity and creating smoother, rounder mouthfeel. MLF contributes to more balanced, mellow wines — often perceived as "creamier," "rounded," or "richer."',
          image: '/assets/Malolatic.png'
        },
        {
          heading: 'Step 6: Aging / Maturation',
          text: 'After fermentation and MLF, wine is typically aged in various containers — oak barrels, stainless-steel tanks, concrete, clay, depending on desired style. Oak barrel aging can impart additional flavor/ aroma notes (vanilla, spice, toast) and influence tannin structure and texture. Time allows chemical reactions that smooth out the wine, integrate flavors, and develop complexity (tertiary aromas, mellow tannins, softer mouthfeel).',
          image: '/assets/aging.png'
        },
        {
          heading: 'Step 7: Blending (If Applicable)',
          text: 'Winemakers may blend wines — either from different grape varieties or from different barrels — to achieve balance, complexity, and desired style before bottling.',
          image: '/assets/blending.png'
        },
        {
          heading: 'Step 8: Clarification, Fining & Filtering',
          text: 'To make wine clear and stable, suspended particles (yeast, proteins, grape solids) are removed via fining agents or filtration. This ensures clarity, stability, and prevents spoilage.',
          image: '/assets/Clarfication.png'
        },
        {
          heading: 'Step 9: Bottling',
          text: 'When wine is ready, it\'s bottled with minimal exposure to oxygen. Often a small amount of sulfur dioxide (or other preservative) is added to protect wine from oxidation and microbial spoilage.',
          image: '/assets/bottling.png'
        },
        {
          heading: 'Step 10: Bottle Aging (Optional / For Some Wines)',
          text: 'Some wines are released soon after bottling; others — especially premium or reserve wines — undergo bottle aging for months or years. This allows further development: rounding of tannins, deepening of flavors, and complexity over time.',
          image: '/assets/bottleAging.png'
        }
      ],
      keyPoints: [
        'Harvest timing affects sugar, acidity, and flavor balance',
        'Red wines ferment with skins; white wines without',
        'Fermentation converts grape sugar into alcohol via yeast',
        'Temperature control during fermentation is crucial',
        'Oak aging adds flavor and allows wine to develop complexity',
        'Blending combines different wines to achieve desired style',
        'Wine continues to evolve and improve in the bottle',
        'The entire process from harvest to release can take months to years'
      ]
    }
  },
  {
    id: '3',
    title: 'Food and Wine Pairing',
    description: 'Master the art of matching wine with food for perfect harmony',
    category: 'pairing',
    content: {
      sections: [
        {
          heading: 'Basic Pairing Principles',
          text: 'The golden rule is to match the weight and intensity of the wine with the food. Light dishes (salads, white fish) pair with light wines (Pinot Grigio, Sauvignon Blanc), while rich, hearty dishes (braised beef, creamy pasta) need full-bodied wines (Cabernet Sauvignon, oaked Chardonnay). Consider the sauce or preparation method, not just the main ingredient—a grilled chicken breast needs different wine than chicken in creamy mushroom sauce.'
        },
        {
          heading: 'The Role of Acidity',
          text: 'Acidity in wine acts as a palate cleanser, cutting through rich, fatty foods and refreshing your mouth. High-acid wines like Sauvignon Blanc, Riesling, and Chianti pair beautifully with rich dishes like fried foods, creamy sauces, and fatty fish. The acid balances the richness and prevents the meal from feeling heavy. As a rule, the wine should have equal or higher acidity than the food.'
        },
        {
          heading: 'Tannins and Protein',
          text: 'Tannins (found in red wines) create a drying sensation by binding to proteins in your saliva. When paired with protein-rich foods like steak, lamb, or aged cheese, tannins bind to food proteins instead, making both the wine and food taste smoother and more pleasant. This is why Cabernet Sauvignon is the classic steak wine. Avoid tannic wines with fish—the combination can taste metallic.'
        },
        {
          heading: 'Sweetness and Spice',
          text: 'Sweet wines balance spicy foods remarkably well. The sweetness counteracts the heat of chili peppers and reduces the burning sensation. Off-dry Riesling, Gewürztraminer, or Moscato pair excellently with spicy Thai, Indian, or Mexican cuisine. For desserts, ensure the wine is sweeter than the food, or the wine will taste sour and thin by comparison.'
        },
        {
          heading: 'Complementary Pairing',
          text: 'Match similar flavors and characteristics to create harmony. A buttery, oaked Chardonnay complements creamy pasta dishes. Earthy Pinot Noir pairs with mushroom risotto. A fruity Beaujolais matches fruit-based sauces. This approach reinforces and amplifies flavors that already exist in both the wine and the food, creating a cohesive, satisfying experience.'
        },
        {
          heading: 'Contrasting Pairing',
          text: 'Create balance by pairing opposites—the wine provides what the food lacks. Crisp, acidic Champagne cuts through rich, buttery lobster. Sweet Sauternes contrasts beautifully with salty blue cheese. Dry rosé balances oily grilled fish. This technique creates dynamic, exciting pairings where wine and food elevate each other through contrast rather than similarity.'
        },
        {
          heading: 'Regional Pairing',
          text: 'What grows together, goes together. This time-tested principle suggests pairing wines and foods from the same region: Italian Chianti with tomato-based pasta, French Chablis with oysters, Spanish Albariño with seafood paella. These regional pairings evolved over centuries because local wines naturally complement local cuisine, sharing similar flavor profiles and cultural context.'
        },
        {
          heading: 'Common Pairing Examples',
          text: 'Oysters + Champagne or Muscadet; Sushi + Dry Riesling; Grilled salmon + Pinot Noir; Fried chicken + Sparkling wine; Steak + Cabernet Sauvignon; Pasta carbonara + Chardonnay; Spicy Thai food + Off-dry Riesling; Lamb + Syrah; Goat cheese + Sauvignon Blanc; Chocolate dessert + Port or late-harvest Zinfandel; Aged Parmesan + Amarone; Fresh mozzarella + Pinot Grigio.'
        }
      ],
      keyPoints: [
        'Match wine weight and intensity with food weight',
        'High-acid wines cut through rich, fatty foods',
        'Tannins pair well with protein (meat, aged cheese)',
        'Sweet wines balance spicy foods',
        'Complement similar flavors or contrast for balance',
        'Regional pairings (what grows together, goes together)',
        'Consider sauce and preparation, not just the protein',
        'Wine should be as sweet or sweeter than dessert'
      ]
    }
  },
  {
    id: '4',
    title: 'Wine Tasting & Serving',
    description: 'Learn professional tasting techniques and optimal serving temperatures',
    category: 'tasting',
    content: {
      sections: [
        {
          heading: 'Step 1: Examine the Wine (Visual Inspection)',
          image: '/assets/Examine.png',
          text: 'Pour wine into a clear glass and observe against a white background. Check the color (pale straw to golden for whites, ruby to garnet for reds), clarity, and viscosity. Thick "legs" may indicate higher alcohol. Visual cues reveal the wine\'s age, body, and style before tasting.'
        },
        {
          heading: 'Step 2: Swirl the Glass (Aerate the Wine)',
          image: '/assets/Swirl.png',
          text: 'Gently swirl the wine in a circular motion to coat the glass interior. This exposes more wine to oxygen, releasing aromatic compounds. Observe the viscosity and "legs" that form, which hint at alcohol content and body.'
        },
        {
          heading: 'Step 3: Smell the Aroma (Nose)',
          image: '/assets/Smell.png',
          text: 'Bring your nose to the glass rim and take gentle sniffs. Identify aromas like fruit, floral, herbal, spicy, or earthy notes. Much of wine\'s "flavor" comes from aroma. Smell before and after swirling to catch different layers of scent.'
        },
        {
          heading: 'Step 4: Take a Sip (Taste & Mouthfeel)',
          image: '/assets/Sip.png',
          text: 'Take a sip and move the wine around your mouth. Evaluate sweetness, acidity, tannins (for reds), body, and alcohol warmth. Notice how flavors change and whether the components are balanced. Taste reveals the wine\'s true structure.'
        },
        {
          heading: 'Step 5: Reflect on the Experience (Finish & Aftertaste)',
          image: '/assets/Observe.png',
          text: 'After swallowing, notice how long flavors linger and how they evolve. A long, pleasant finish often signals quality. Consider if sweetness, acidity, tannin, and alcohol are balanced. Most importantly, trust your personal preference.'
        },
        {
          heading: 'White',
          temperature: '8-12°C (46-54°F)',
          text: 'Light, crisp whites (Pinot Grigio, Sauvignon Blanc, Vinho Verde, Muscadet) should be served colder (8-10°C) to emphasize their refreshing acidity and citrus flavors. Fuller-bodied whites (Chardonnay, Viognier, white Burgundy, Rhône whites) benefit from slightly warmer temperatures (10-12°C) to reveal their complexity, texture, and subtle flavors. If too cold, these wines taste bland and closed.'
        },
        {
          heading: 'Rosé',
          temperature: '8-12°C (46-54°F)',
          text: 'Serve rosé chilled, similar to white wine. Light, crisp Provence-style rosés are best at 8-10°C, while fuller-bodied, more structured rosés (Tavel, Bandol) can handle 10-12°C. Cold temperature highlights the refreshing acidity and delicate fruit flavors of rosé, making it perfect for warm weather and summer meals.'
        },
        {
          heading: 'Red',
          temperature: '14-18°C (57-64°F)',
          text: 'Contrary to popular belief, "room temperature" for red wine refers to cellar temperature (around 15-16°C), not modern heated rooms (21-24°C). Light-bodied reds (Pinot Noir, Beaujolais, Valpolicella) prefer cooler temperatures (14-16°C) to maintain freshness and prevent alcohol from dominating. Full-bodied reds (Cabernet Sauvignon, Syrah, Barolo, Amarone) work best at 16-18°C, allowing tannins to soften and complex flavors to emerge. If served too warm, reds taste alcoholic and jammy.'
        }
      ],
      keyPoints: [
        'Look: observe color (reveals age, variety), clarity, and viscosity (legs)',
        'Smell: identify primary, secondary, and tertiary aromas after swirling',
        'Taste: evaluate attack, mid-palate, finish, balance, and complexity',
        'Consider sweetness, acidity, tannins, body, alcohol, and flavor intensity',
        'Trust your own palate—personal preference matters most',
        'Temperature dramatically affects wine\'s aroma, flavor, and texture',
        'Sparkling: 6-8°C well-chilled to preserve bubbles',
        'White: 8-12°C, lighter whites colder',
        'Red: 14-18°C, not warm room temperature',
        'When in doubt, serve cooler—wine warms quickly in the glass'
      ]
    }
  }
];

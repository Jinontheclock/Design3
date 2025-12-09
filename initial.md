# Requirements
## Summary
A wine study and recommendation app designed for beginners. The app has two main features: Learning (educational content about wine fundamentals) and Recommendations (quiz-based personalized wine suggestions). Users start on a home page with two paths to choose from.

## Use cases
- Learn about wines
  1) User selects "Learn" from the home page
  2) User browses educational topics about wine colors, grape varieties, regions, food pairing, and tasting techniques
  3) User clicks on a topic to read detailed information with key takeaways
  4) User can navigate back to explore other topics

- Get personalized wine recommendations
  1) User selects "Recommendations" from the home page
  2) User answers a 5-question quiz about their preferences (wine color, sweetness, body, flavors, price range)
  3) System analyzes answers and generates personalized wine recommendations
  4) User views recommended wines with match percentages and explanations
  5) User can retake the quiz to get new recommendations

## Plan
### Learn about wines
1. [x] Create home page with two main feature paths (Learn and Recommendations)
2. [x] Design learning page with categorized educational topics
3. [x] Create 6 learning topics covering wine colors, grape varieties, pairing, tasting, regions, and serving
4. [x] Implement topic detail view with sections and key takeaways
5. [x] Add navigation between home, learning list, and topic details

### Get personalized wine recommendations
1. [x] Create quiz interface with 5 preference questions
2. [x] Implement question types: single choice and multiple choice
3. [x] Add progress indicator and navigation between questions
4. [x] Build recommendation engine that scores wines based on quiz answers
5. [x] Display top 6 wine recommendations with match percentages and reasons
6. [x] Add ability to retake quiz for new recommendations

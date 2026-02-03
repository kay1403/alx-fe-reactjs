import { useRecipeStore } from '../store/recipeStore';

export default function RecommendationsList() {
  const { recommendations, generateRecommendations } = useRecipeStore();

  return (
    <div>
      <button onClick={generateRecommendations}>Generate</button>
      {recommendations.map((r) => <p key={r.id}>{r.title}</p>)}
    </div>
  );
}

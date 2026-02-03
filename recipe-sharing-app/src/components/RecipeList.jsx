import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.filteredRecipes());

  return (
    <div>
      {recipes.map((r) => (
        <div key={r.id}>
          <h3>{r.title}</h3>
          <Link to={`/recipe/${r.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}

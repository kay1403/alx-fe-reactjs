import { useRecipeStore } from '../store/recipeStore';

export default function FavoritesList() {
  const { recipes, favorites } = useRecipeStore();

  const favs = recipes.filter((r) => favorites.includes(r.id));

  return (
    <div>
      <h2>Favorites</h2>
      {favs.map((r) => <p key={r.id}>{r.title}</p>)}
    </div>
  );
}

import { useRecipeStore } from './recipeStore';

export default function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  return <button onClick={() => deleteRecipe(id)}>Delete</button>;
}

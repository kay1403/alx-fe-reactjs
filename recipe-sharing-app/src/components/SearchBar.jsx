import { useRecipeStore } from './recipeStore';

export default function SearchBar() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      placeholder="Search..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

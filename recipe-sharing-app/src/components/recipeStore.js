import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  favorites: [],
  recommendations: [],

  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
  
  setRecipes: (recipes) =>
    set({
      recipes: recipes,
    }),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      favorites: state.favorites.filter((f) => f !== id),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  setSearchTerm: (term) => set({ searchTerm: term }),

  filteredRecipes: () => {
    const { recipes, searchTerm } = get();
    return recipes.filter((r) =>
      r.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

  addFavorite: (id) =>
    set((state) => ({ favorites: [...state.favorites, id] })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((f) => f !== id),
    })),

  generateRecommendations: () =>
    set((state) => ({
      recommendations: state.recipes.filter(
        (r) => state.favorites.includes(r.id) && Math.random() > 0.5
      ),
    })),
}));
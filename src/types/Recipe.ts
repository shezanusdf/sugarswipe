export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  summary: string;
  instructions: string;
  extendedIngredients: {
    id: number;
    original: string;
    amount: number;
    unit: string;
    name: string;
    image: string;
  }[];
  dishTypes: string[];
  cuisines: string[];
  diets: string[];
  difficulty?: 'Easy' | 'Medium' | 'Hard';
}

export interface RecipeFilters {
  difficulty?: string;
  maxReadyTime?: number;
  diet?: string;
  cuisine?: string;
}
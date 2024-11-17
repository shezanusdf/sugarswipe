const BASE_URL = 'https://api.spoonacular.com/recipes';
const API_KEY = '8f633ffcb7a74abdbf0901b98d2bc671';

export async function searchDesserts(query?: string) {
  const response = await fetch(
    `${BASE_URL}/complexSearch?apiKey=${API_KEY}&type=dessert&number=20&addRecipeInformation=true&instructionsRequired=true${
      query ? `&query=${query}` : ''
    }`
  );
  const data = await response.json();
  
  if (!data.results) {
    throw new Error('Failed to fetch recipes');
  }
  
  // Transform the data to match our Recipe interface
  return data.results.map((recipe: any) => ({
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    readyInMinutes: recipe.readyInMinutes,
    servings: recipe.servings,
    sourceUrl: recipe.sourceUrl,
    summary: recipe.summary,
    instructions: recipe.instructions || '',
    extendedIngredients: recipe.extendedIngredients || [],
    dishTypes: recipe.dishTypes || [],
    cuisines: recipe.cuisines || [],
    diets: recipe.diets || [],
    difficulty: recipe.readyInMinutes <= 30 ? 'Easy' : recipe.readyInMinutes <= 60 ? 'Medium' : 'Hard'
  }));
}

export async function getRandomDessert() {
  const response = await fetch(
    `${BASE_URL}/random?apiKey=${API_KEY}&tags=dessert&number=1`
  );
  const data = await response.json();
  
  if (!data.recipes?.[0]) {
    throw new Error('Failed to fetch random recipe');
  }
  
  const recipe = data.recipes[0];
  return {
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    readyInMinutes: recipe.readyInMinutes,
    servings: recipe.servings,
    sourceUrl: recipe.sourceUrl,
    summary: recipe.summary,
    instructions: recipe.instructions || '',
    extendedIngredients: recipe.extendedIngredients || [],
    dishTypes: recipe.dishTypes || [],
    cuisines: recipe.cuisines || [],
    diets: recipe.diets || [],
    difficulty: recipe.readyInMinutes <= 30 ? 'Easy' : recipe.readyInMinutes <= 60 ? 'Medium' : 'Hard'
  };
}

export async function getRecipeDetails(id: string) {
  const response = await fetch(
    `${BASE_URL}/${id}/information?apiKey=${API_KEY}`
  );
  const recipe = await response.json();
  
  if (!recipe) {
    throw new Error('Failed to fetch recipe details');
  }
  
  return {
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    readyInMinutes: recipe.readyInMinutes,
    servings: recipe.servings,
    sourceUrl: recipe.sourceUrl,
    summary: recipe.summary,
    instructions: recipe.instructions || '',
    extendedIngredients: recipe.extendedIngredients || [],
    dishTypes: recipe.dishTypes || [],
    cuisines: recipe.cuisines || [],
    diets: recipe.diets || [],
    difficulty: recipe.readyInMinutes <= 30 ? 'Easy' : recipe.readyInMinutes <= 60 ? 'Medium' : 'Hard'
  };
}

export async function getCategories() {
  return [
    'Cake',
    'Cookie',
    'Ice Cream',
    'Pudding',
    'Pie',
    'Brownie',
    'Chocolate',
    'Pastry'
  ];
}
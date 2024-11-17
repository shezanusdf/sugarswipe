import React from 'react';
import { X, Clock, Users, Tag } from 'lucide-react';
import type { Recipe } from '../types/Recipe';

interface Props {
  recipe: Recipe;
  onClose: () => void;
}

export function RecipeDetails({ recipe, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="relative h-64">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
          <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-500" />
              <span>{recipe.readyInMinutes} minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-gray-500" />
              <span>{recipe.servings} servings</span>
            </div>
            {recipe.diets.length > 0 && (
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-gray-500" />
                <span>{recipe.diets[0]}</span>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-3">Summary</h3>
              <div
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: recipe.summary }}
              />
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">Ingredients</h3>
              <div className="grid grid-cols-2 gap-2">
                {recipe.extendedIngredients.map((ingredient) => (
                  <div
                    key={ingredient.id}
                    className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg"
                  >
                    <img
                      src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                      alt={ingredient.name}
                      className="w-8 h-8 object-cover"
                    />
                    <div>
                      <p className="font-medium">{ingredient.name}</p>
                      <p className="text-sm text-gray-600">
                        {ingredient.amount} {ingredient.unit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">Instructions</h3>
              <div className="space-y-4">
                {recipe.instructions.split('\n').map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-medium">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            {recipe.sourceUrl && (
              <section>
                <h3 className="text-lg font-semibold mb-3">Source</h3>
                <a
                  href={recipe.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 underline"
                >
                  View Original Recipe
                </a>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
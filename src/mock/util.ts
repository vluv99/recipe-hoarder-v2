import type {Recipe} from "@/model/Recipe.ts";

export function getStoredRecipes(): Recipe[] {
    const data = localStorage.getItem('recipes');
    return data ? JSON.parse(data) : [];
}

export function setStoredRecipe(recipe: Recipe) {
    const recipes = getStoredRecipes();
    if (recipes.find(r => r.id === recipe.id)) {
        recipes.splice(recipes.findIndex(r => r.id === recipe.id), 1);
    } else {
        recipes.push(recipe);
    }
    localStorage.setItem('recipes', JSON.stringify(recipes));
}
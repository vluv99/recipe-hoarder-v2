import type { Recipe } from "./Recipe";
import { generateUniqueId } from "@/utils/generateUniqueId.ts";

export class Account {
  id: string;
  name: string;
  email: string;
  isDemo: boolean;
  savedRecipes: string[];
  isMetric: boolean = true;

  constructor(data: {
    id: string;
    name: string;
    email: string;
    isDemo: boolean;
    savedRecipes: string[];
  }) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.isDemo = data.isDemo;
    this.savedRecipes = data.savedRecipes;
  }

  static createDemoAccount() {
    return new Account({
      id: generateUniqueId(),
      name: "Demo Account",
      email: "",
      isDemo: true,
      savedRecipes: [],
    });
  }

  addRecipe(recipe: Recipe) {
    if (!this.savedRecipes.some((id) => id === recipe.id)) {
      this.savedRecipes.push(recipe.id);
    }
  }

  removeRecipe(recipeId: string) {
    this.savedRecipes = this.savedRecipes.filter((id) => id !== recipeId);
  }

  hasRecipe(recipeId: string) {
    return this.savedRecipes.some((id) => id === recipeId);
  }
}

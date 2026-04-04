import { Account } from "@/model/Account";
import type { Recipe } from "@/model/Recipe";

const ACCOUNT_KEY = "account";

export function getAccount(): Account | null {
  const stored = localStorage.getItem(ACCOUNT_KEY);
  if (!stored) return null;
  const parsed = JSON.parse(stored);
  return new Account(parsed);
}

export function setAccount(account: Account): void {
  localStorage.setItem(ACCOUNT_KEY, JSON.stringify(account));
}

function addRecipeToAccount(account: Account, recipe: Recipe): void {
  account.addRecipe(recipe);
  setAccount(account);
}

function removeRecipeFromAccount(account: Account, recipeId: string): void {
  account.removeRecipe(recipeId);
  setAccount(account);
}

export function toggleRecipeInAccount(recipe: Recipe): void {
  const account = getAccount();
  if (!account) return;
  const isSaved = account.savedRecipes.some((id) => id === recipe.id);
  if (isSaved) {
    removeRecipeFromAccount(account, recipe.id);
  } else {
    addRecipeToAccount(account, recipe);
  }
}

export function createDemoAccount() {
  const account = getAccount();
  if (account) return;
  return Account.createDemoAccount();
}

import { useQuery } from "@tanstack/react-query";
import type { Recipe } from "@/model/Recipe.ts";
import { mockRecipes } from "@/mock/mockRecipes.ts";

const RECIPES_QUERY_KEY = "recipes";

export const useRecipes = () => {
  const { data, isFetching } = useQuery<Recipe[]>({
    queryKey: [RECIPES_QUERY_KEY],
    queryFn: () =>
      new Promise<Recipe[]>((resolve) => {
        setTimeout(() => resolve(mockRecipes), 300); // Simulate async fetch
      }),
  });
  return { data, isFetching };
};

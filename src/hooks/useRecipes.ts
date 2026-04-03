import { useQuery } from "@tanstack/react-query";
import type { Recipe } from "@/model/Recipe.ts";
import { mockRecipes } from "@/mock/mockRecipes.ts";

export const useRecipes = () => {
  const { data, isFetching } = useQuery<Recipe[]>({
    queryKey: ['recipes'],
    queryFn: () =>
      new Promise<Recipe[]>((resolve) => {
        setTimeout(() => resolve(mockRecipes), 300); // Simulate async fetch
      }),
  });
  return { data, isFetching };
};

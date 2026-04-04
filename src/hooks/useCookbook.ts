import { useQuery } from "@tanstack/react-query";
import type { Recipe } from "@/model/Recipe.ts";
import { getAccount } from "@/services/account";
import { mockRecipes } from "@/mock/mockRecipes";

export const COOKBOOK_QUERY_KEY = "cookbook";

export const useCookbook = () => {
  const { data, isFetching } = useQuery<Recipe[]>({
    queryKey: [COOKBOOK_QUERY_KEY],
    queryFn: () => {
      const account = getAccount();
      const savedIds: string[] = account ? account.savedRecipes : [];
      const recipes = mockRecipes.filter((r) => savedIds.includes(r.id));
      return Promise.resolve(recipes);
    },
  });
  return { data, isFetching };
};

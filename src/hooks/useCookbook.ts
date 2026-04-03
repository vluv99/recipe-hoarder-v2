import { useQuery } from "@tanstack/react-query";
import type { Recipe } from "@/model/Recipe.ts";

export const useCookbook = () => {
  const { data, isFetching } = useQuery<Recipe[]>({
    queryKey: ['cookbook'],
    queryFn: () =>
      new Promise<Recipe[]>((resolve) => {
        const recipes = localStorage.getItem('recipes');
        resolve(recipes ? JSON.parse(recipes) : []);
      }),
  });
  return { data, isFetching };
};


import type { Recipe } from "@/model/Recipe.ts";
import { RecipeCard } from "@/components/custom/RecipeCard.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";

type Props = {
  title?: string;
  recipes: Recipe[];
  isLoading?: boolean;
};

export function RecipesCardLayout({ title, recipes, isLoading }: Props) {
  return (
    <div className="p-4 flex flex-col gap-4 min-w-full">
      {title && <h3>{title}</h3>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-64 w-full rounded-xl" />
            ))
          : recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                isLoading={isLoading}
              />
            ))}
      </div>
    </div>
  );
}

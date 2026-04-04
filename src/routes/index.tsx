import { createFileRoute } from "@tanstack/react-router";
import { RecipesCardLayout } from "@/components/custom/RecipesCardLayout.tsx";
import { useRecipes } from "@/hooks/useRecipes.ts";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { data: recipes, isFetching } = useRecipes();
  return (
    <RecipesCardLayout
      title="Look for new recipes!"
      recipes={recipes ?? []}
      isLoading={isFetching}
    />
  );
}

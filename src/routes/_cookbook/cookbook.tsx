import { createFileRoute } from "@tanstack/react-router";
import { EmptyCookbook } from "@/routes/_cookbook/-components/EmptyCookbook.tsx";
import { RecipesCardLayout } from "@/components/custom/RecipesCardLayout.tsx";
import { useCookbook } from "@/hooks/useCookbook.ts";

export const Route = createFileRoute("/_cookbook/cookbook")({
  component: Cookbook,
});

function Cookbook() {
  const { data, isFetching } = useCookbook();

  if (data?.length === 0) return <EmptyCookbook />;
  return (
    <RecipesCardLayout
      title="Recipes in my Cookbook"
      recipes={data ?? []}
      isLoading={isFetching}
    />
  );
}

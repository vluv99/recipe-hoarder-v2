import { createFileRoute } from "@tanstack/react-router";
import { RecipeForm } from "@/components/custom/RecipeForm";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/recipe/new")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="py-8 px-4 flex justify-center">
      <Card className="max-w-lg w-full p-6">
        <RecipeForm />
      </Card>
    </div>
  );
}

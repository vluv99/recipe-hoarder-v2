import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import type { Recipe } from "@/model/Recipe.ts";
import { Heart } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { useNavigate } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  recipe: Recipe;
  isLoading?: boolean;
};

export function RecipeCard({ recipe, isLoading }: Props) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const isSaved = false; // todo: fix this once we have account data

  const mutation = useMutation({
    mutationFn: () => {
      return new Promise<void>((resolve) => {
        const stored = localStorage.getItem("recipes");
        let recipes: Recipe[] = stored ? JSON.parse(stored) : [];
        const currentlySaved = recipes.some((r) => r.id === recipe.id);
        if (currentlySaved) {
          recipes = recipes.filter((r) => r.id !== recipe.id);
        } else {
          recipes = [...recipes, recipe];
        }
        localStorage.setItem("recipes", JSON.stringify(recipes));
        resolve();
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      queryClient.invalidateQueries({ queryKey: ["cookbook"] });
    },
  });

  const toggleRecipeSave = () => {
    mutation.mutate();
  };

  return (
    <Card size="sm" className="grid grid-rows-[auto_1fr_auto]">
      <img
        src={recipe.picture ?? ""}
        alt=""
        className="aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardTitle className="line-clamp-2">{recipe.title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {recipe.description}
        </CardDescription>
        <CardAction>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                onClick={toggleRecipeSave}
                disabled={isLoading || mutation.isPending}
              >
                {isSaved ? <Heart fill="red" color="red" /> : <Heart />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {isSaved ? "Remove from Cookbook" : "Save this for me!"}
            </TooltipContent>
          </Tooltip>
        </CardAction>
      </CardHeader>
      <CardFooter>
        <CardAction>
          <Button
            onClick={() =>
              navigate({
                to: "/recipe/$recipeId",
                params: { recipeId: recipe.id },
              })
            }
          >
            View
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}

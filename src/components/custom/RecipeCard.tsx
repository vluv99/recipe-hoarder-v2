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
import { useAccount, useToggleRecipeInAccount } from "@/hooks/useAccount.ts";
import { DemoAccountDialog } from "@/components/custom/DemoAccountDialog.tsx";
import { useState } from "react";

type Props = {
  recipe: Recipe;
  isLoading?: boolean;
};

export function RecipeCard({ recipe, isLoading }: Props) {
  const navigate = useNavigate();
  const [showDemoDialog, setShowDemoDialog] = useState(false);

  const { data: account } = useAccount();
  const toggleMutation = useToggleRecipeInAccount();

  const isSaved = account?.hasRecipe(recipe.id) ?? false;

  const handleSaveClick = () => {
    if (!account) {
      setShowDemoDialog(true);
      return;
    }
    toggleMutation.mutate(recipe);
  };

  return (
    <>
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
                  onClick={handleSaveClick}
                  disabled={isLoading || toggleMutation.isPending}
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
      <DemoAccountDialog
        open={showDemoDialog}
        onClose={() => setShowDemoDialog(false)}
      />
    </>
  );
}

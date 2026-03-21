import {Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import type {Recipe} from "@/model/Recipe.ts";
import {Heart} from "lucide-react";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip.tsx";
import {getStoredRecipes, setStoredRecipe} from "@/mock/util.ts";
import {useState} from "react";
import {useNavigate} from "@tanstack/react-router";

type Props = {
    recipe: Recipe
};

export function RecipeCard({recipe}: Props) {
    const navigate = useNavigate();
    const [isSaved, setIsSaved] = useState(Boolean(getStoredRecipes().find(r => r.id === recipe.id)));

    const toggleRecipeSave = () => {
        setStoredRecipe(recipe);
        setIsSaved(!isSaved);
    }

    return (
        <Card size='sm' className='grid grid-rows-[auto_1fr_auto]'>
            <img
                src={recipe.picture ?? ''}
                alt=''
                className="aspect-video w-full object-cover"
            />
            <CardHeader>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.description}</CardDescription>
                <CardAction>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" onClick={toggleRecipeSave}>
                                {isSaved ? <Heart fill='red' color='red'/> : <Heart/>}
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            {isSaved ? 'Remove from Cookbook' : 'Save this for me!'}
                        </TooltipContent>
                    </Tooltip>
                </CardAction>
            </CardHeader>
            <CardFooter>
                <CardAction>
                    <Button onClick={() => navigate({to: '/recipe/$recipeId', params: {recipeId: recipe.id}})}>View</Button>
                </CardAction>
            </CardFooter>
        </Card>
    );
}

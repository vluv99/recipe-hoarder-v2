import type {Recipe} from "@/model/Recipe.ts";
import {RecipeCard} from "@/components/custom/RecipeCard.tsx";

type Props = {
    title?: string;
    recipes: Recipe[];
};

export function RecipesCardLayout({title, recipes}: Props) {
    return (
        <div className='p-4 flex flex-col gap-4 min-w-full'>
            {title && <h3>{title}</h3>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recipes.map(recipe => (<RecipeCard recipe={recipe}/>))}
            </div>
        </div>
    );
}

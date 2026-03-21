import { createFileRoute } from '@tanstack/react-router'
import {mockRecipes} from "@/mock/mockRecipes.ts";
import {RecipeCard} from "@/components/custom/RecipeCard.tsx";

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    const recipes = mockRecipes;

    return (
        <div className='p-4 flex flex-col gap-4 min-w-full'>
            <h3>Look for new recipes!</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {recipes.map(recipe => (<RecipeCard recipe={recipe}/>))}
            </div>
        </div>
    )
}
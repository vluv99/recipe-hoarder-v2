import {createFileRoute, useMatch} from '@tanstack/react-router'
import {mockRecipes} from "@/mock/mockRecipes.ts";
import {Separator} from "@/components/ui/separator.tsx";
import {Card} from "@/components/ui/card.tsx";

export const Route = createFileRoute('/recipe/$recipeId')({
    component: Recipe,
})

function Recipe() {
    const match = useMatch({ from: Route.id} );
    const recipe = mockRecipes.find(r => r.id === match.params.recipeId);

    if (!recipe) {
        return <div className='p-2'>Recipe not found</div>
    }

    return <div className='py-2 px:2 md: px-4 ld:px-8 xl:px-16'>
        <Card className='flex flex-col gap-4 p-4'>
        <img src={recipe.picture} alt={recipe.title} className='w-full aspect-video object-cover mt-4'/>
        <div className='text-xl'>{recipe.title}</div>
        <div className='text-md italic'>{recipe.description}</div>
        <Separator/>
        <div>
            <div className='text-lg'>Ingredients</div>
            <ul className='list-disc list-inside'>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>
                        <span className='font-semibold'>{ingredient.amount}</span>
                         &nbsp;
                        <span>{ingredient.product}</span>
                    </li>
                ))}
            </ul>
        </div>
        <Separator/>
        <div>
            <div className='text-lg'>Instructions</div>
            <ol className='list-decimal list-inside'>
                {recipe.directions.map((direction, index) => (
                    <li key={index}>
                        <span>{direction.text}</span>
                    </li>
                ))}
            </ol>
        </div>
        </Card>
    </div>
}

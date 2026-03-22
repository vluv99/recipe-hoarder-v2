import {createFileRoute, useMatch} from '@tanstack/react-router'
import {mockRecipes} from "@/mock/mockRecipes.ts";
import {Card} from "@/components/ui/card.tsx";

export const Route = createFileRoute('/recipe/$recipeId')({
    component: Recipe,
})

function Recipe() {
    const match = useMatch({from: Route.id});
    const recipe = mockRecipes.find(r => r.id === match.params.recipeId);

    if (!recipe) {
        return <div className='p-2'>Recipe not found</div>
    }

    return (
        <div className="py-4 px-2 md:px-8 xl:px-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Image  */}
                <div className="mb-4 md:mb-0 md:col-span-2 md:row-span-2 flex items-start">
                    <img
                        src={recipe.picture ?? ''}
                        alt=""
                        className="w-full aspect-video object-cover rounded-lg"
                    />
                </div>

                {/* Quick details */}
                <div className="mb-4 md:mb-0 md:col-span-1 md:row-span-2 flex flex-col">
                    <Card className="p-4 flex flex-col gap-2 h-full">
                        <div className="text-2xl font-bold">{recipe.title}</div>
                        <div className="flex flex-wrap gap-4 text-sm">
                            <span>rating</span>
                            <span>kudos</span>
                            <span>time, kcal</span>
                            <span>tags</span>
                        </div>
                    </Card>
                </div>

                {/* Description */}
                {recipe.description && (
                    <div className="mb-4 md:col-span-3">
                        <Card className="p-4 italic text-base">
                            {recipe.description}
                        </Card>
                    </div>
                )}

                {/* Ingredients and Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:col-span-3">
                    <Card className="p-4">
                        <div className="text-lg font-semibold">Ingredients</div>
                        <ul className="list-disc list-inside text-sm">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>
                                    <span className="font-semibold">{ingredient.amount}</span>
                                    &nbsp;
                                    <span>{ingredient.product}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                    <Card className="p-4">
                        <div className="text-lg font-semibold">Instructions</div>
                        <ol className="list-decimal list-inside text-sm">
                            {recipe.directions.map((direction, index) => (
                                <li key={index}>
                                    <span>{direction.text}</span>
                                </li>
                            ))}
                        </ol>
                    </Card>
                </div>
            </div>
        </div>
    );
}

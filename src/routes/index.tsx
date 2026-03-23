import { createFileRoute } from '@tanstack/react-router'
import {mockRecipes} from "@/mock/mockRecipes.ts";
import {RecipesCardLayout} from "@/components/custom/RecipesCardLayout.tsx";

export const Route = createFileRoute('/')({
    component: Home,
})

function Home() {
    const recipes = mockRecipes;

    return <RecipesCardLayout title='Look for new recipes!' recipes={recipes}/>;
}
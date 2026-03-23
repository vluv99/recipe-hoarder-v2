import {createFileRoute} from '@tanstack/react-router'
import {useState} from "react";
import {getStoredRecipes} from "@/mock/util.ts";
import {EmptyCookbook} from "@/routes/_cookbook/components/-EmptyCookbook.tsx";
import {RecipesCardLayout} from "@/components/custom/RecipesCardLayout.tsx";

export const Route = createFileRoute('/_cookbook/cookbook')({
    component: Cookbook,
})

function Cookbook() {
    const [recipes] = useState(getStoredRecipes());

    if (recipes.length === 0) return <EmptyCookbook/>
    return <RecipesCardLayout title='Recipes in my Cookbook' recipes={recipes}/>;
}
import type {Ingredient} from "@/model/Ingredient.ts";
import type {Direction} from "@/model/Direction.ts";

export class Recipe {
    title: string;
    description?: string;
    picture?: string;
    ingredients: Ingredient[];
    directions: Direction[];
    //toAdd: attach multiple images, select main image, store origUrl, add categories, add tags, add prep time, add cook time, add total time, add servings, add kcal, all likes, add author, comments, ratings, add date of creation, add date of last update

    constructor(recipe: Recipe) {
        const {title, description, picture, ingredients, directions} = recipe;
        this.title = title;
        this.description = description;
        this.picture = picture;
        this.ingredients = ingredients;
        this.directions = directions;
    }
}
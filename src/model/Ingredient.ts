export class Ingredient {
    amount: string
    product: string
    notes?: string

    //toAdd: add category grouping to ingerdients to separate them if needed

    constructor(ingredient: Ingredient) {
        this.amount = ingredient.amount;
        this.product = ingredient.product;
        this.notes = ingredient.notes;
    }
}
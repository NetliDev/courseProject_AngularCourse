import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServices } from '../shopping-list/shopping-list.service';

//inject a service into a service
@Injectable()
export class RecipeService {

    constructor(private slService: ShoppingListServices) {

    }
    private recipes: Recipe[] = [
        new Recipe('tasty Burger',
            'This is simply Burger',
            'https://www.inspiredtaste.net/wp-content/uploads/2019/07/Crispy-Falafel-Recipe-1200.jpg',
            [new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)]),
        new Recipe('A test Recipe2',
            'what elses do yo need',
            'https://www.inspiredtaste.net/wp-content/uploads/2019/07/Crispy-Falafel-Recipe-1200.jpg',
            [new Ingredient('Meat', 1),
            new Ingredient('bunt', 2)])

    ];

    getRecipes() {
        return this.recipes.slice();
        //slice devuelve una copia del array inicial (recipes)
    }
    getRecipe(index:number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
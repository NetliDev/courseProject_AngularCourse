import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServices } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

//inject a service into a service
@Injectable()
export class RecipeService {
    //porque no se actualiza los arrays se usa el subject, hay otro ejemplo en shopping list service
    recipesChanged = new Subject<Recipe[]>();



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

    constructor(private slService: ShoppingListServices) { }
    setRecipes(recipe: Recipe[]) {
        this.recipes = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
        //slice devuelve una copia del array inicial (recipes)
    }
    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }


    //se usan en recipe-edit-component
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}
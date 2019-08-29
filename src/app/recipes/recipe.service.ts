import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test Recipe', 'This is simply a test',
            'https://www.inspiredtaste.net/wp-content/uploads/2019/07/Crispy-Falafel-Recipe-1200.jpg'),
        new Recipe('A test Recipe2', 'This is simply a test2',
            'https://www.inspiredtaste.net/wp-content/uploads/2019/07/Crispy-Falafel-Recipe-1200.jpg')

    ];

    getRecipes(){
        return this.recipes.slice();
        //slice devuelve una copia del array inicial (recipes)
    }
}
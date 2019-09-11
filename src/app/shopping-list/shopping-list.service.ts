import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListServices {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>(); // para el boton editar

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }
    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());//para informar que la lista cambio 
    }

    //metodo para el recipe.service:
    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        //nustro array de ingredients lo va a convertir en una lista para hacerles push
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());

    }

    //se usa en shopping list edit
    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());//para informar que la lista cambio 
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1); //borra 1 elemento desde la posicion index
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators'


@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient,
    private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-9e6ef.firebaseio.com/recipes.json',
      this.recipeService.getRecipes()); //tambien se puede suscribir, como la seccion 18
  }

  getRecipes() {
    this.http.get('https://ng-recipe-book-9e6ef.firebaseio.com/recipes.json').pipe(
      map(
        (recipes: Recipe[]) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = []; // agregar un array vacio porque si se guarda sin datos el array de ingredientes, simplemente no se crea.entonces si en alguna parte de la aplicacion se llama a este array causaria un error
            }
          }
          return recipes;
        })).
      subscribe(
        (response: Recipe[]) => {
          this.recipeService.setRecipes(response);
        }
      );
  }
}

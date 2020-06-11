import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators'
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getToken();
    // const headers = new HttpHeaders().set('Authotization','Bearer afowekpfoekrfpker');  
    // return this.http.put('https://ng-recipe-book-9e6ef.firebaseio.com/recipes.json',
    //   this.recipeService.getRecipes(), {
    //     params: new HttpParams().set('auth',token)
    //     // headers:headers
    //   }); //tambien se puede suscribir, como la seccion 18

    // otra foram de hacerlo mas avanzado, obtenindo el rogreso de carga
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-9e6ef.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(), {
      reportProgress: true,
      params: new HttpParams().set('auth', token)
    });
    return this.http.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.http.get('https://ng-recipe-book-9e6ef.firebaseio.com/recipes.json?auth=' + token).pipe(
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

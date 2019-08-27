import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>(); // se manda el recipe type porque es el objeto que queremos mostrar

  recipes:Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test',
     'https://www.inspiredtaste.net/wp-content/uploads/2019/07/Crispy-Falafel-Recipe-1200.jpg'),
    new Recipe('A test Recipe2', 'This is simply a test2',
     'https://www.inspiredtaste.net/wp-content/uploads/2019/07/Crispy-Falafel-Recipe-1200.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }


  onRecipeSelected(recipe :Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}

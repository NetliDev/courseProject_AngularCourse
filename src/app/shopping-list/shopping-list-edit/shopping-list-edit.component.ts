import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListServices } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
  })

export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput', {static :false}) nameInputRef :ElementRef;
  @ViewChild('amountInput', {static :false}) amountInputRef :ElementRef;
    constructor(private slService:ShoppingListServices) { }
  
    ngOnInit() {
    }
  
    onAddItem(){
      const ingName = this.nameInputRef.nativeElement.value;
      const ingAmount = this.amountInputRef.nativeElement.value;
      const newIngredient =new Ingredient(ingName,ingAmount);
      this.slService.addIngredient(newIngredient);
    }
}
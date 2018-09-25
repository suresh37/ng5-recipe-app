import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

 @Injectable({
  providedIn: 'root'
}) 
export class ShoppingListService {
  ingAdded = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [ new Ingredient("Apples",10),
  new Ingredient("Tomatoes",15)
];
  constructor() { }
  getIngredients(){
    return this.ingredients.slice();
  }
  OnIngAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
     this.ingAdded.emit(this.getIngredients());
  }
}

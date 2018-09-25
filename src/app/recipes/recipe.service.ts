import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

// @Injectable({
//   providedIn: 'root'
// })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe("Carrot Halva","Recipe details about the preparation of carrot Halva ","https://c1.staticflickr.com/6/5496/31479301445_cb53c0f4e9_b.jpg"),
   // new Recipe("A Test Recipe 2","This is simply a test ","https://www.logolynx.com/images/logolynx/82/829ba7822e43ebe89394d1ecbbf152b7.jpeg")
   new Recipe("Curd Rice","this none describes about how to prepare curd rice.","https://www.indianhealthyrecipes.com/wp-content/uploads/2016/07/curd-rice-recipes.jpg")
   
    ]; 
  constructor() { }
  getRecipes(){
    return this.recipes.slice();
  }
}

import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe("Carrot Halva",
    "Recipe details about the preparation of carrot Halva ",
    "https://c1.staticflickr.com/6/5496/31479301445_cb53c0f4e9_b.jpg",
    [new Ingredient('Carrot',5),
     new Ingredient("Sugar",3)]),
   // new Recipe("A Test Recipe 2","This is simply a test ","https://www.logolynx.com/images/logolynx/82/829ba7822e43ebe89394d1ecbbf152b7.jpeg")
   new Recipe("Curd Rice",
   "this none describes about how to prepare curd rice.",
   "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/07/curd-rice-recipes.jpg",
   [new Ingredient("curd",4)]),
   new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2), 
        new Ingredient('Meat', 2)
      ])

    ]; 
  constructor(private slService: ShoppingListService) { }
  getRecipes(){
    return this.recipes.slice();
  }
  addIngsToShoppingList(ingredients: Ingredient[]){
     this.slService.addIngredients(ingredients);
  }
}

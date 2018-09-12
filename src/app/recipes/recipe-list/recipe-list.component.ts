import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("A Test Recipe 1","This is simply a test ","https://c1.staticflickr.com/6/5496/31479301445_cb53c0f4e9_b.jpg"),
    new Recipe("A Test Recipe 2","This is simply a test ","https://www.logolynx.com/images/logolynx/82/829ba7822e43ebe89394d1ecbbf152b7.jpeg")
  ]; 

  constructor() { }

  ngOnInit() {
  }

}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Recipe } from "../recipe.model";
var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent() {
        this.recipes = [
            new Recipe("A Test Recipe", "This is simply a test ", "https://c1.staticflickr.com/6/5496/31479301445_cb53c0f4e9_b.jpg")
        ];
    }
    RecipeListComponent.prototype.ngOnInit = function () {
    };
    RecipeListComponent = __decorate([
        Component({
            selector: 'app-recipe-list',
            templateUrl: './recipe-list.component.html',
            styleUrls: ['./recipe-list.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], RecipeListComponent);
    return RecipeListComponent;
}());
export { RecipeListComponent };
//# sourceMappingURL=recipe-list.component.js.map
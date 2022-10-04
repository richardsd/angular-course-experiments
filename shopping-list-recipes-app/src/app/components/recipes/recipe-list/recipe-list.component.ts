import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test recipe', 'https://cdn.pixabay.com/photo/2016/12/10/21/26/food-1898194_960_720.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a new test recipe', 'https://cdn.pixabay.com/photo/2016/12/10/21/26/food-1898194_960_720.jpg'),
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    console.log('Recipe list ', recipe);
    this.recipeSelected.emit(recipe);
  }

}

import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient';
import { Recipe } from 'src/app/model/recipe';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe', 
      'This is simply a test recipe', 
      'https://cdn.pixabay.com/photo/2016/12/10/21/26/food-1898194_960_720.jpg',
      [
        new Ingredient('Tomatoes', 3), 
        new Ingredient('Banana', 2),
      ],
      ),
    new Recipe(
      'Another Test Recipe', 
      'This is simply a new test recipe', 
      'https://cdn.pixabay.com/photo/2016/12/10/21/26/food-1898194_960_720.jpg',
      [
        new Ingredient('Tomatoes', 4),
        new Ingredient('Banana', 2),
        new Ingredient('Pineaple', 1),
        new Ingredient('Pasta', 3),
      ],
      ),
  ];

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}

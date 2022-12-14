import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/model/ingredient';
import { Recipe } from 'src/app/model/recipe';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'A Test Recipe', 
      'This is simply a test recipe', 
      'https://cdn.pixabay.com/photo/2016/12/10/21/26/food-1898194_960_720.jpg',
      [
        new Ingredient('Tomatoes', 3), 
        new Ingredient('Banana', 2),
      ],
      ),
    new Recipe(
      2,
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

  getRecipeById(id: number): Recipe | undefined {
    return this.recipes.find(recipe => recipe.id === id);
  }

  addRecipe(recipe: Recipe) {
    if (recipe.id === -1) {
      recipe.id = this.recipes.length + 1;
    }
    this.recipes.push(recipe);
    this.recipesChanged.next(this.getRecipes());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index - 1] = recipe;
    this.recipesChanged.next(this.getRecipes());
  }

  deleteRecipe(id: number) {
    const index = this.recipes.findIndex(recipe => recipe.id === id);
    if (index > -1) {
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.getRecipes());
    }
  }
}

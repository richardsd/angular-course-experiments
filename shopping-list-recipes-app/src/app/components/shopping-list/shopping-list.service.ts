import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/model/ingredient';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 6),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.getIngredients());
  }

  updateIngredient(index: number, newIngredient: Ingredient): void {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.getIngredients());
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  deleteIngredient(index: number): void {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.getIngredients());
  }
}

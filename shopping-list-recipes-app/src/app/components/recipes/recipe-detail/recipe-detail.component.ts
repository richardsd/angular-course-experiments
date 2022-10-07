import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  recipe: Recipe | undefined;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe!.ingredients);
  }

}

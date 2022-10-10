import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  recipe: Recipe | undefined;

  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id'] !== undefined) {
        this.recipe = this.recipeService.getRecipeById(+params['id']);
      }
    });
  }

  addToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe!.ingredients);
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe | undefined;

  // @Output() recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onRecipeSelected() {
    // this.recipeSelected.emit(this.recipe);
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}

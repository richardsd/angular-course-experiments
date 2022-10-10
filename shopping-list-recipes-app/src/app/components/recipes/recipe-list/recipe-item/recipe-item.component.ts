import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
// import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe | undefined;

  // @Output() recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor(
    // private recipeService: RecipeService, 
    // private router: Router,
    // private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  // onRecipeSelected() {
  //   // this.recipeSelected.emit(this.recipe);
  //   // this.recipeService.recipeSelected.emit(this.recipe);
  //   this.router.navigate([this.recipe?.id], { relativeTo: this.route });
  // }

}

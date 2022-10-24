import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe | undefined;
  editMode: boolean = false;
  recipeForm!: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.recipe = this.recipeService.getRecipeById(+params['id']);
        this.editMode = true;
      } else {
        this.editMode = false;
      }
      this.initForm();
    });
  }

  onSubmit() {
    const recipe = new Recipe(-1,this.recipeForm.value.name, this.recipeForm.value.description, this.recipeForm.value.imagePath, this.recipeForm.value.ingredients);
    if (this.editMode) {
      recipe.id = this.recipe!.id;
      this.recipeService.updateRecipe(this.recipe!.id, recipe);
    } else {
      this.recipeService.addRecipe(recipe);
    }
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      }),
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onEditCancel() {
    if (this.recipeForm.dirty) {
      if (window.confirm('There are changes to the recipe. Do you want to save them?')) {
        this.onSubmit();    
      }
    } else {
      this.recipeForm.reset();
      this.router.navigate(['..'], { relativeTo: this.route });
    }
  }

  private initForm(): void {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray<any>([]);

    if (this.editMode && this.recipe) {
      recipeName = this.recipe.name;
      recipeImagePath = this.recipe.imagePath;
      recipeDescription = this.recipe.description;
      if (Array.isArray(this.recipe.ingredients) && this.recipe.ingredients.length > 0) {
        for (let ingredient of this.recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients,
    });
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
}

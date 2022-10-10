import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { RecipeEmptyItemComponent } from './components/recipes/recipe-list/recipe-item/recipe-empty-item/recipe-empty-item.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { 
    path: 'recipes', 
    component: RecipesComponent, 
    children: [
      { path: '', component: RecipeEmptyItemComponent},
      {
        path: 'new', component: RecipeEditComponent, 
      },
      {
        path: ':id', component: RecipeDetailComponent,
      },
      {
        path: ':id/edit', component: RecipeEditComponent,
      },
    ] 
  },
  { path: 'shopping-list', component: ShoppingListComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownDirective } from './components/shared/dropdown.directive';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeItemComponent } from './components/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListService } from './components/shopping-list/shopping-list.service';
import { HomeComponent } from './components/home/home.component';
import { RecipeService } from './components/recipes/recipe.service';
import { RecipeEmptyItemComponent } from './components/recipes/recipe-list/recipe-item/recipe-empty-item/recipe-empty-item.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    HomeComponent,
    RecipeEmptyItemComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

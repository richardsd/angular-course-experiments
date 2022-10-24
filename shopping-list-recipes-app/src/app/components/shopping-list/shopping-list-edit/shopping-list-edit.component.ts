import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/model/ingredient';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  editMode = false;
  editedIndex!: number;
  editingIngredient!: Ingredient;
  @ViewChild('f', { static: true})
  form: NgForm | undefined;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedIndex = index;
      this.editingIngredient = this.shoppingListService.getIngredient(this.editedIndex);
      this.form?.setValue({
        name: this.editingIngredient.name,
        amount: this.editingIngredient.amount,
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm): void {
    const ingredient: { name: string, amount: number } = form.value;
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.form?.reset();
  }

  deleteIngredient() {
    if (this.editMode) {
      this.shoppingListService.deleteIngredient(this.editedIndex);
      this.onClear();
    }
  }

  onClear() {
    this.form?.reset();
    this.editMode = false;
  }

}

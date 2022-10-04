import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput')
  nameInput!: ElementRef<HTMLInputElement>;

  @ViewChild('amountInput')
  amountInput!: ElementRef<HTMLInputElement>;

  @Output()
  ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdd(event: Event) {
    event.preventDefault();
    this.ingredientAdded.emit(new Ingredient(this.nameInput.nativeElement.value, Number.parseInt(this.amountInput.nativeElement.value)));
  }

  onClear() {
    
  }

}

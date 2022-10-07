import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient';
import { ShoppingListService } from '../shopping-list.service';

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

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onIngredientAdd(event: Event) {
    event.preventDefault();
    this.shoppingListService.addIngredient(new Ingredient(this.nameInput.nativeElement.value, Number.parseInt(this.amountInput.nativeElement.value)));
  }

  onClear() {
    
  }

}

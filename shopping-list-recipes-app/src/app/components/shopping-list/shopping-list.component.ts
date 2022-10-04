import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 6),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onItemAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}

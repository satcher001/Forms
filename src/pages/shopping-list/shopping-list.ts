import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ShoppingListService } from "../../services/ShoppingListService"; //ShoppingListService
import { Ingredients } from "../../models/ingredients";
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html'
})
export class ShoppingListPage {
  listItems: Ingredients[];
  constructor(private slService: ShoppingListService){}
  ionViewWillEnter() {
    this.loadItems();
  }
  private loadItems() {
    this.listItems = this.slService.getItems();
  }
  onAddItem(form: NgForm){
    this.slService.addItem(form.value.ingredientName, form.value.amount);
    form.reset();
    this.loadItems();
  }
  onCheckItem(index: number) {
    this.slService.removeItem(index);
    this.loadItems();
  }
}



/*onCheckItem(index: number) {
  this.slService.removeItem(index);
  this.loadItems();
}*/

/*export class Ingredients {
  constructor(public name: string, public amount: number) {}
}*/


/*
import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html'
})
export class ShoppingListPage {
  onAddItem(form: NgForm){
    console.log(form);
  }
}
*/

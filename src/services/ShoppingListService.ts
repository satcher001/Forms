import { Ingredients } from "../models/ingredients";
export class ShoppingListService {
  private ingredient: Ingredients[] = [];
  addItem(name: string, amount: number) {
    this.ingredient.push(new Ingredients(name, amount));
    console.log(this.ingredient);
  }
  addItems(items: Ingredients[]) {
    this.ingredient.push(...items);
  }
  getItems() {
    return this.ingredient.slice();
  }
  removeItem(index: number) {
    this.ingredient.splice(index, 1);
  }
}

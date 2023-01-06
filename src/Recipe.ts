import Ingredient from "./Ingredient";

export default class Recipe {
  ingredients: Ingredient[];

  constructor() {
    this.ingredients = []
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  getCalories() {
    let calories = 0;
    for (const ingredient of this.ingredients) {
      calories += (ingredient.quantity * ingredient.calorie) / ingredient.weight;
    }
    return calories;
  }

  getTotal() {
    return this.ingredients.reduce((pesoTotal, ingredient) => {
      pesoTotal += ingredient.quantity;
      return pesoTotal
    }, 0)
  }
}
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Recipe_exports = {};
__export(Recipe_exports, {
  default: () => Recipe
});
module.exports = __toCommonJS(Recipe_exports);
class Recipe {
  constructor() {
    this.ingredients = [];
  }
  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
  }
  getCalories() {
    let calories = 0;
    for (const ingredient of this.ingredients) {
      calories += ingredient.quantity * ingredient.calorie / ingredient.weight;
    }
    return calories;
  }
  getTotal() {
    return this.ingredients.reduce((pesoTotal, ingredient) => {
      pesoTotal += ingredient.quantity;
      return pesoTotal;
    }, 0);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=Recipe.js.map

"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_Recipe = __toESM(require("../src/Recipe"));
var import_Ingredient = __toESM(require("../src/Ingredient"));
test("Deve criar uma receita e calcular as calorias", function() {
  const recipe = new import_Recipe.default();
  recipe.addIngredient(new import_Ingredient.default("Ovo", 100, 143, 90));
  recipe.addIngredient(new import_Ingredient.default("Polvilho", 100, 351, 200));
  recipe.addIngredient(new import_Ingredient.default("Queijo", 100, 321, 100));
  const calories = recipe.getCalories();
  expect(calories).toBe(1151.7);
});
test("Deve criar uma receita e o peso total", function() {
  const recipe = new import_Recipe.default();
  recipe.addIngredient(new import_Ingredient.default("Ovo", 100, 143, 90));
  recipe.addIngredient(new import_Ingredient.default("Polvilho", 100, 351, 200));
  recipe.addIngredient(new import_Ingredient.default("Queijo", 100, 321, 100));
  const pesoTotal = recipe.getTotal();
  expect(pesoTotal).toBe(390);
});
//# sourceMappingURL=Recipe.test.js.map

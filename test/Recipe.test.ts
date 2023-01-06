import Recipe from "../src/Recipe";
import Ingredient from "../src/Ingredient";

test("Deve criar uma receita e calcular as calorias", function() {
  const recipe = new Recipe();
  recipe.addIngredient(new Ingredient("Ovo", 100, 143, 90))
  recipe.addIngredient(new Ingredient("Polvilho", 100, 351, 200))
  recipe.addIngredient(new Ingredient("Queijo", 100, 321, 100))
  const calories = recipe.getCalories();
  expect(calories).toBe(1151.7);
})

test("Deve criar uma receita e o peso total", function() {
  const recipe = new Recipe();
  recipe.addIngredient(new Ingredient("Ovo", 100, 143, 90))
  recipe.addIngredient(new Ingredient("Polvilho", 100, 351, 200))
  recipe.addIngredient(new Ingredient("Queijo", 100, 321, 100))
  const pesoTotal = recipe.getTotal();
  expect(pesoTotal).toBe(390);
})

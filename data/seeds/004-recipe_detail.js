
exports.seed = async function(knex) {
  await knex("recipe_detail").insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 2, measurement: "each" },
    { recipe_id: 1, ingredient_id: 2, quantity: 1, measurement: "tbsp" },
    { recipe_id: 2, ingredient_id: 3, quantity: 2, measurement: "cups" },
    { recipe_id: 2, ingredient_id: 4, quantity: 1, measurement: "cup" },
    { recipe_id: 3, ingredient_id: 5, quantity: 1, measurement: "oz" },
    { recipe_id: 3, ingredient_id: 6, quantity: 2, measurement: "filets" },
  ])
}


exports.seed = async function(knex) {
  await knex("recipes").insert([
    { name: "Fried Egg" },
    { name: "Steamed Rice" },
    { name: "Grilled Salmon" },
  ])
}

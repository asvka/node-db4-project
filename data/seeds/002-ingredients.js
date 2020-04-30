
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    { name: "Egg" },
    { name: "Fat" },
    { name: "Water" },
    { name: "Short-Grain Rice" },
    { name: "Canola Oil Spray" },
    { name: "Salmon Filet" },
  ])
}


exports.seed = async function(knex) {
  await knex("steps").insert([
    { step: "Heat oil in pan, on medium heat.", recipe_id: 1 },
    { step: "Drop egg into pan, cook until edges bubble and become golden brown.", recipe_id: 1 },
    { step: "Garnish with salt and pepper.", recipe_id: 1 },
    { step: "Boil water, add a dash of soy sauce and rice vinegar for flavor.", recipe_id: 2 },
    { step: "Add rice to water, DO NOT RINSE RICE!", recipe_id: 2 },
    { step: "Cover until water is completely absorbed into the rice and rice is al dente.", recipe_id: 2 },
    { step: "Heat grill on high, spray both grill and salmon generously with canola spray", recipe_id: 3 },
    { step: "Lay seasoned salmon diagonally on hot grill.", recipe_id: 3 },
    { step: "Once grill marked, turn 90 degrees to add secondary grill mark-- creating a hash mark", recipe_id: 3 },
    { step: "Take off of grill, finish salmon in oven at 400 degrees F for about 5-10 minutes.", recipe_id: 3 },
    { step: "Garnish with salt, pepper, and lemon.", recipe_id: 3 }, 
  ])
}

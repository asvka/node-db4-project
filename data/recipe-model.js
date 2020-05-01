const db = require('../config')

function getRecipes() {
    return db("recipes")
}

function getShoppingList (recipe_id) {
    return db("recipe_detail as rd")
        .join("ingredients as i", "rd.ingredient_id", "i.id")
        .select("i.name", "rd.quantity", "rd.measurement", "rd.recipe_id")
        .where("rd.recipe_id", recipe_id)
}

function getInstructions (recipe_id) {
    return db("steps as s")
        .join("recipes as r", "s.recipe_id", "r.id")
        .select("r.name", "s.step", "s.recipe_id", "r.id")
        .where("r.id", recipe_id)
        
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

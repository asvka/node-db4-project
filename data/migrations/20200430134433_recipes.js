
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table) => {
      table.increments("id")
      table.text("name").notNull().unique()
  })
  await knex.schema.createTable("ingredients", (table) => {
      table.increments("id")
      table.text("name").notNull().unique()
  })
  await knex.schema.createTable("steps", (table) => {
    table.increments("id")
    table.integer("recipe_id")
          .references("id")
          .inTable("recipes")
          .onDelete("SET NULL")
          .onUpdate("CASCADE")
    table.text("step").notNull()
  })
  await knex.schema.createTable("recipe_detail", (table) => {
      table.increments("id")
      table.integer("recipe_id")
            .references("id")
            .inTable("recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
      table.integer("ingredient_id")
            .references("id")
            .inTable("ingredients")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
      table.float("quantity").notNull()
      table.text("measurement").notNull()
      table.integer("steps_id")
            .references("id")
            .inTable("steps")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
  })
  
    }

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipe_detail")
    await knex.schema.dropTableIfExists("steps")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
};

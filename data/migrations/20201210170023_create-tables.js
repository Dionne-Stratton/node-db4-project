exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (table) => {
      table.increments("recipe_id");
      table.string("recipe_name", 128).notNullable();
    })
    .createTable("ingredients", (table) => {
      table.increments("ingredient_id");
      table.string("ingredient_name", 128).notNullable();
    })
    .createTable("steps", (table) => {
      table.increments("step_id");
      table.integer("step_number").notNullable();
      table.string("step_text", 128).notNullable();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("ingredient_usage", (table) => {
      table.increments("ingredient_usage_id");
      table.integer("ingredient_amount").notNullable();
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("ingredient_usage")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};

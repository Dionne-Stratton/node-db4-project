exports.seed = function (knex, Promise) {
  return knex("steps").insert([
    { step_number: 1, step_text: "prepare dough", recipe_id: 1 },
    { step_number: 2, step_text: "add toppings", recipe_id: 1 },
    { step_number: 1, step_text: "prepare tortilla", recipe_id: 2 },
    { step_number: 2, step_text: "add fillings", recipe_id: 2 },
  ]);
};

exports.seed = function (knex, Promise) {
  return knex("ingredient_usage").insert([
    { ingredient_amount: 1, ingredient_id: "1", step_id: 1 },
    { ingredient_amount: 2, ingredient_id: "3", step_id: 1 },
    { ingredient_amount: 1, ingredient_id: "2", step_id: 2 },
    { ingredient_amount: 2, ingredient_id: "4", step_id: 2 },
  ]);
};

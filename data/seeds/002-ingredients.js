exports.seed = function (knex, Promise) {
  return knex("ingredients").insert([
    { ingredient_name: "dough" },
    { ingredient_name: "tortilla" },
    { ingredient_name: "fillings" },
    { ingredient_name: "toppings" },
  ]);
};

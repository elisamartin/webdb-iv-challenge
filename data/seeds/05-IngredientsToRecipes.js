exports.seed = function(knex, Promise) {
	return knex('ingredientsToRecipes').del().then(function() {
		return knex('ingredientsToRecipes').insert([
			{ id: 1, ingredients_id: 1, recipe_id: 1 },
			{ id: 2, ingredients_id: 1, recipe_id: 2 },
			{ id: 3, ingredients_id: 1, recipe_id: 3 },
			{ id: 4, ingredients_id: 1, recipe_id: 4 },
			{ id: 5, ingredients_id: 1, recipe_id: 5 },
			{ id: 6, ingredients_id: 3, recipe_id: 1 },
			{ id: 7, ingredients_id: 3, recipe_id: 2 },
			{ id: 8, ingredients_id: 3, recipe_id: 3 },
			{ id: 9, ingredients_id: 4, recipe_id: 3 },
			{ id: 10, ingredients_id: 4, recipe_id: 6 },
			{ id: 11, ingredients_id: 4, recipe_id: 7 },
			{ id: 12, ingredients_id: 5, recipe_id: 2 },
			{ id: 13, ingredients_id: 2, recipe_id: 1 },
			{ id: 14, ingredients_id: 2, recipe_id: 2 },
			{ id: 15, ingredients_id: 2, recipe_id: 3 },
			{ id: 16, ingredients_id: 2, recipe_id: 4 },
			{ id: 17, ingredients_id: 2, recipe_id: 5 },
			{ id: 18, ingredients_id: 2, recipe_id: 6 }
		]);
	});
};

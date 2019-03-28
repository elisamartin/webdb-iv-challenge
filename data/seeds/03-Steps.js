exports.seed = function(knex, Promise) {
	return knex('steps').del().then(function() {
		return knex('steps').insert([
			{
				id: 1,
				steps:
					'Scatter with cheese, drizzle with olive oil and season. Put one pizza, still on its baking sheet, on top of the preheated sheet or tray. Bake for 8-10 mins until crisp. Serve with a little more olive oil, and basil leaves if using.',
				recipe_id: 1
			},
			{
				id: 2,
				steps:
					'Scatter with cheese, drizzle with olive oil and season. Put one pizza, still on its baking sheet, on top of the preheated sheet or tray. Bake for 8-10 mins until crisp. Serve with a little more olive oil, and basil leaves if using.',
				recipe_id: 2
			},
			{
				id: 3,
				steps:
					'Scatter with cheese, drizzle with olive oil and season. Put one pizza, still on its baking sheet, on top of the preheated sheet or tray. Bake for 8-10 mins until crisp. Serve with a little more olive oil, and basil leaves if using.',
				recipe_id: 3
			},
			{
				id: 4,
				steps: 'These are the steps to make a cheesburger',
				recipe_id: 4
			},
			{
				id: 5,
				steps: 'These are the steps to make a bacon cheese burger',
				recipe_id: 5
			},
			{
				id: 6,
				steps: 'These are the steps to make a Wopper',
				recipe_id: 6
			},
			{
				id: 7,
				steps: 'These are the steps to make a Taco',
				recipe_id: 7
			}
		]);
	});
};

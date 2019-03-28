exports.seed = function(knex, Promise) {
	return knex('ingredients').del().then(function() {
		return knex('ingredients').insert([
			{ id: 1, ingredient: 'Cheese', quantity: 1, unit_of_measurement: 'kilo' },
			{ id: 2, ingredient: 'Flour', quantity: 2, unit_of_measurement: 'kilos' },
			{ id: 3, ingredient: 'Tomato sauce', quantity: 1, unit_of_measurement: 'litre' },
			{ id: 4, ingredient: 'Tomatoes', quantity: 1, unit_of_measurement: 'kilo' },
			{ id: 5, ingredient: 'Pineapple', quantity: 1, unit_of_measurement: 'can' }
		]);
	});
};

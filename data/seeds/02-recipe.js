exports.seed = function(knex, Promise) {
	return knex('recipe').del().then(function() {
		return knex('recipe').insert([
			{ id: 1, name: 'Margarita', dish_id: 1 },
			{ id: 2, name: 'Hawaiana', dish_id: 1 },
			{ id: 3, name: 'Tony Pepperoni', dish_id: 1 },
			{ id: 4, name: 'Cheeseburger', dish_id: 2 },
			{ id: 5, name: 'Bacon Cheese', dish_id: 2 },
			{ id: 6, name: 'Wopper', dish_id: 2 },
			{ id: 7, name: 'Tex-mex', dish_id: 3 }
		]);
	});
};

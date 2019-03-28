exports.seed = function(knex, Promise) {
	return knex('dish').del().then(function() {
		return knex('dish').insert([
			{ id: 1, name: 'Pizza' },
			{ id: 2, name: 'Hamburger' },
			{ id: 3, name: 'Tacos' }
		]);
	});
};

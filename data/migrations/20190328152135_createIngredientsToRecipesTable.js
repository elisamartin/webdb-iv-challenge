exports.up = function(knex, Promise) {
	return knex.schema.createTable('ingredientsToRecipes', (table) => {
		table.increments();

		table
			.integer('recipe_id')
			.unsigned()
			.references('id')
			.inTable('recipe')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		table
			.integer('ingredients_id')
			.unsigned()
			.references('id')
			.inTable('ingredients')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('ingredientsToRecipes');
};

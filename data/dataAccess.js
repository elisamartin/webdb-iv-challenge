const db = require('./dbConfig.js');

module.exports = {
	getDishes,
	getDish,
	addDish,
	getRecipes,
	addRecipe
};

function getDishes() {
	return db('dish');
}

function getDish(id) {
	return db('dish')
		.join('recipe', { 'dish.id': 'recipe.dish_id' })
		.select('dish.name as dish', 'recipe.name as recipe')
		.where({ 'dish.id': id });
}

function addDish(newDish) {
	return db('dish').insert(newDish).then((ids) => {
		return getDish(ids[0]);
	});
}

function getRecipes() {
	return db('dish')
		.join('recipe', { 'dish.id': 'recipe.dish_id' })
		.select('recipe.id', 'recipe.name as recipe', 'dish.name as dish');
}

function addRecipe(newRecipe) {
	return db('recipe').insert(newRecipe).then((ids) => ({ id: ids[0] }));
}

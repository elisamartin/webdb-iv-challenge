const express = require('express');

const db = require('./data/dataAccess.js');

const server = express();

server.use(express.json());

server.get('/api/dishes', (req, res) => {
	db
		.getDishes()
		.then((dishes) => {
			res.status(200).json(dishes);
		})
		.catch((err) => {
			res.status(500).json({ message: 'The dishes could not be retrieved at this time.' });
		});
});

server.get('/api/dishes/:id', (req, res) => {
	const { id } = req.params;
	db
		.getDish(id)
		.then((dish) => {
			if (!dish) {
				res.status(404).json({ error: 'dish not found' });
			} else {
				res.status(200).json(dish);
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'The dish could not be retrieved at this time.' });
		});
});

server.post('/api/dishes', (req, res) => {
	const newDish = req.body;
	if (newDish) {
		db.addDish(newDish).then((result) => res.status(201).json(result)).catch((err) => {
			res.status(500).json({ message: 'The was an error saving the new dish.' });
		});
	} else {
		res.status(400).json({ message: 'Please provide the name of the new dish.' });
	}
});

server.get('/api/recipes', (req, res) => {
	db
		.getRecipes()
		.then((recipes) => {
			res.json(recipes);
		})
		.catch((err) => {
			res.status(500).json({ message: 'The recipes could not be retrieved at this time.' });
		});
});

server.post('/api/recipes', (req, res) => {
	const newRecipe = req.body;
	if (newRecipe) {
		db
			.addRecipe(newRecipe)
			.then((idInfo) => {
				res.status(201).json(idInfo);
			})
			.catch((err) => {
				res.status(500).json({ message: 'The was an error saving the new recipe.' });
			});
	} else {
		res.status(400).json({ message: 'Please provide the name of the new recipe.' });
	}
});

const port = process.env.PORT || 5555;
server.listen(port, () => console.log(`\n Server running on ${port}\n`));

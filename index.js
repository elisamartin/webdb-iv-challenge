const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile').development;

const db = knex(knexConfig);

const server = express();

server.use(express.json());

const port = process.env.PORT || 5555;
server.listen(port, () => console.log(`\n Server running on ${port}\n`));

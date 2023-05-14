const ToDO = require('../models/todos.model');
const { Router } = require('express');

const routes = Router();


routes.get('/api/todos', async (req, res) => {
    res.send('test exitoso')
})

module.exports = routes;
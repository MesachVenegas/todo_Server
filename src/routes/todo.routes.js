const ToDO = require('../models/todos.model');
const { Router } = require('express');

const routes = Router();


routes.get('/api/v1/todos', async (req, res) => {
    try{
        const result = await ToDO.findAll({
            attributes: [
                'id',
                'title',
                'description',
                'is_completed',
                'created_at',
            ]
        });
        res.status(200).send(result)
    }
    catch(err){
        console.error(err);
        res.send(err);
    }
})

module.exports = routes;
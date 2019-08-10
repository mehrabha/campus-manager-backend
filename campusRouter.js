const express = require('express');
const Joi = require('Joi');
const router = express.Router();

const db = require('./config/database');
const Campus = require('./modules/Campus');

const campusSchema = {
    name: Joi.string().required(),
    bio: Joi.string().required(),
    address: Joi.string().required(),
    img: Joi.string().required()
}

router.use(express.json());

// Get all campuses
router.get('/', (request, response) => {
    Campus.findAll()
    .then(campuses => response.status(200).send(campuses))
    .catch(error => response.status(404).send(error));
});

// Get a campus
router.get('/:id', (request, response) => {
    Campus.findAll({
        where: {
            id: request.params.id
        }
    })
    .then(campus => response.send(campus))
    .catch(error => response.status(404).send(`Campus with ID ${request.params.id} not found ${error}`));
});

// Add a campus
router.post('/', (request, response) => {
    const result = Joi.validate(request.body, campusSchema);
    if (result.error) {
        response.status(400).send(result.error.details);
        return;
    }

    Campus.create(request.body)
    .then(campus => response.send(campus))
    .catch(error => response.status(400).send(error));
});

router.delete('/:id', (request, response) => {
    Campus.destroy({
        where: {
            id: request.params.id
        }
    })
    .then(val => response.sendStatus(200))
    .catch(error => send(`Campus with ID ${request.params.id} not found ${error}`));
});

// Edit a campus
router.put('/:id', (request, response) => {
    const result = Joi.validate(request.body, campusSchema);
    if (result.error) {
        return response.status(400).send(result.error.details);
    }
    
    
    campus.name = request.body.name;
    campus.bio = request.body.bio;
    campus.address = request.body.address;
    campus.img = request.body.img;
    response.send(campus);
});

module.exports = router;
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
    .then(campuses => {
        console.log(campuses);
        response.send(campuses);
    })
    .catch(error => {
        response.status(404).send(error);
    });
});

router.get('/add', (request, response) => {
    const data = {
        id: 2,
		name: "City College",
		bio: "goonie 3",
		address: "123 rosemary st",
		img: "https://png.pngtree.com/svg/20170616/22811e059c.svg"
    };

    campus.create({
        id: data.id,
        name: data.name,
        bio: data.bio,
        address: data.address,
        img: data.img
    })
    .then(Campus => response.redirect('/campuses'))
    .catch(error => console.log(error));
});

// Get a campus
router.get('/:id', (request, response) => {
    const campus = campuses.find(campus => (campus.id === request.params.id));
    if (campus) {
        response.send(campus);
    } else {
        response.status(404).send(`Campus with ID ${request.params.id} not found`);
    }
});

// Add a campus
router.post('/', (request, response) => {
    const result = Joi.validate(request.body, campusSchema);
    if (result.error) {
        response.status(400).send(result.error.details);
        return;
    }

    const campus = {
		id: campuses.length,
		name: request.body.name,
		bio: request.body.bio,
		address: request.body.address,
		img: request.body.img
    };
    campuses.push(campus);
    response.send(campus);
});

// Edit a campuses
router.put('/:id', (request, response) => {
    const campus = campuses.find(campus => (campus.id == request.params.id));
    if (!campus) {
        return response.status(404).send(`Campus with ID ${request.params.id} not found`);
    }

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
const Joi = require('joi');
const express = require('express');
const app = express();

const campusSchema = {
    name: Joi.string().required(),
    bio: Joi.string().required(),
    address: Joi.string().required(),
    img: Joi.string().required()
}
let campuses = [
	{
		id: "0",
		name: "hunter",
		bio: "Cuny",
		address: "123 Main St",
		img: "https://png.pngtree.com/svg/20170616/22811e059c.svg"},
	{
		id: "1",
		name: "baruch",
		bio: "Cuny",
		address: "456 Main St",
		img: "https://png.pngtree.com/svg/20170616/22811e059c.svg"
	},
];

const studentSchema = {
    name: Joi.string().required(),
    img: Joi.string().required(),
    gpa: Joi.number().required(),
    college: Joi.number().required()
}

let students = [
    {
        id: "0",
        name: "Neil Tyson",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 2.0,
        college: 0
    },
    {
        id: "1",
        name: "Mike Tyson",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 2.2,
        college: 0
     },
     {
        id: "2",
        name: "Elon Musk",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 2.7,
        college: 0
     },
     {
        id: "3",
        name: "Elizabeth Ryler",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 2.9,
        college: 1
    },
    {
        id: "4",
        name: "Harold Kimp",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 3.3,
        college: 1
    },
    {
        id: "5",
        name: "Michelle Rubin",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 1.0,
        college: 1
    },
    {
        id: "6",
        name: "Kenneth Di",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 0.1,
        college: 1
    },
    {
        id: "7",
        name: "Lolita Lopez",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 3.7,
        college: 1
    },
    {
        id: "8",
        name: "Rain Man",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 4.0,
        college: 0
    }
];

app.use(express.json());

// Campuses
app.get('/api', (request, response) => {
    response.send('CampusManager API');
});

// Get all campuses
app.get('/api/campuses', (request, response) => {
    response.send(campuses);
});

// Get a campus
app.get('/api/campuses/:id', (request, response) => {
    const campus = campuses.find(campus => (campus.id === request.params.id));
    if (campus) {
        response.send(campus);
    } else {
        response.status(404).send(`Campus with ID ${request.params.id} not found`);
    }
});

// Add a campus
app.post('/api/campuses', (request, response) => {
    const result = Joi.validate(request.body, campusSchema);
    if (result.error) {
        response.status(400).send(result.error.details);
        return;
    }

    const campus = {
		id: campuses.length + 1,
		name: request.body.name,
		bio: request.body.bio,
		address: request.body.address,
		img: request.body.img
    };
    campuses.push(campus);
    response.send(campus);
});

// Edit a campuses
app.put('/api/campuses/:id', (request, response) => {
    const campus = campuses.find(campus => (campus.id == request.params.id));
    if (!campus) {
        response.status(404).send(`Campus with ID ${request.params.id} not found`);
        return;
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

// Students
app.get('/api/students', (request, response) => {
    response.send(students);
});

app.get('/api/students/:id', (request, response) => {
    const student = students.find(student => (student.id == request.params.id));
    if (student) {
        response.send(student);
    } else {
        response.status(404).send(`Student with ID ${request.params.id} not found`);
    }
});

app.post('/api/students', (request, response) => {
    const result = Joi.validate(request.body, studentSchema);

    if (result.error) {
        response.status(400).send(result.error.details);
        return;
    }
    const student = {
        id: students.length + 1,
        name: request.body.name,
        img: request.body.img,
        gpa: request.body.gpa,
        college: request.body.college,
    }
    students.push(student);
    response.send(student);
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`));
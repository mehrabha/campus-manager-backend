const express = require('express');
const Joi = require('joi');
const router = express.Router();

const studentSchema = {
    name: Joi.string().required(),
    img: Joi.string().required(),
    gpa: Joi.number().required(),
    college: Joi.number().required()
}

let students = [
    {
        id: 0,
        name: "Neil Tyson",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 2.0,
        college: 0
    },
    {
        id: 1,
        name: "Mike Tyson",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 2.2,
        college: 0
     },
     {
        id: 2,
        name: "Elon Musk",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 2.7,
        college: 0
     },
     {
        id: 3,
        name: "Elizabeth Ryler",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 2.9,
        college: 1
    },
    {
        id: 4,
        name: "Harold Kimp",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 3.3,
        college: 1
    },
    {
        id: 5,
        name: "Michelle Rubin",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 1.0,
        college: 1
    },
    {
        id: 6,
        name: "Kenneth Di",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 0.1,
        college: 1
    },
    {
        id: 7,
        name: "Lolita Lopez",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 3.7,
        college: 1
    },
    {
        id: 8,
        name: "Rain Man",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 4.0,
        college: 0
    }
];

router.use(express.json());

// Students
router.get('/', (request, response) => {
    response.send(students);
    console.log(students.length);
});

router.get('/:id', (request, response) => {
    const student = students.find(student => (student.id == request.params.id));
    if (student) {
        response.send(student);
    } else {
        response.status(404).send(`Student with ID ${request.params.id} not found`);
    }
});

router.post('/', (request, response) => {
    const result = Joi.validate(request.body, studentSchema);
    console.log(students.length);
    if (result.error) {
        response.status(400).send(result.error.details);
        return;
    }
    const student = {
        id: students.length,
        name: request.body.name,
        img: request.body.img,
        gpa: request.body.gpa,
        college: request.body.college,
    }
    students.push(student);
    response.send(student);
});

// Edit a campuses
router.put('/:id', (request, response) => {
    const student = students.find(student => (student.id == request.params.id));
    if (!student) {
        return response.status(404).send(`Student with ID ${request.params.id} not found`);
    }

    const result = Joi.validate(request.body, studentSchema);
    if (result.error) {
        return response.status(400).send(result.error.details);
    }

    student.name = request.body.name;
    student.img = request.body.img;
    student.gpa = request.body.gpa;
    student.college = request.body.college;
    response.send(student);
});

module.exports = router;
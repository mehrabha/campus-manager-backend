const express = require('express');
const router1 = express.Router();

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

function findById(id){ //helper function to search students by Id, IndexOf wasn't working properly
	for(let i = 0; i < students.length; i++)
	{
		if(students[i].id == id)
		{
			return i;
		}
	}
	return -1;
}

//GET localhost:3000/api/students
router1.get('/', (req,res) =>{
	res.status(200).send(students);
})

//GET localhost:3000/api/students/1
router1.get('/:id', (req,res) =>{
	if(findById(req.params.id) != -1)
	{
		res.status(200).send(students[req.params.id]);
	}
	else
	{
		console.log("Invalid ID");
		res.status(404).send();
	}
})

//POST localhost:3000/api/students
router1.post('/', (req,res)=>{
	console.log(req.body);
	students.push(req.body);
	res.status(201).send(students);
})

//PUT localhost:3000/api/students/1
router1.put('/:id', (req,res)=>{
	let index = findById(req.params.id);
	if(index != -1)
	{
		students[req.params.id] = req.body;
		res.status(201).send(students);
	}
	else
	{
		res.status(402).send();
	}
})

//DELETE localhost:3000/api/students/1
router1.delete('/:id', (req,res)=>{
	let index = findById(req.params.id);
	if( index != -1)
	{
		students.splice(index,1);//removes one element starting from position index
		res.status(201).send(students);
	}
	else{
		console.log("Cannot delete selected element.");
		res.status(402).send();
	}
})

module.exports = router1;
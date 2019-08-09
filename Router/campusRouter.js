const express = require('express');
const router = express.Router();
const Campus = require('../Database/Models/Campuses');
const Student = require('../Database/Models/Students');

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

function findById(id){ //helper function to search campuses by Id, IndexOf wasn't working properly
	for(let i = 0; i < campuses.length; i++)
	{
		if(campuses[i].id == id)
		{
			return i;
		}
	}
	return -1;
}

//GET localhost:3000/api/campuses
router.get('/', (req,res) =>{
	Campus.findAll({ include: [Student] }) //Eager Loading
	.then(campuses => res.status(200).json(campuses))
	.catch(err => console.log(err))
})

//GET localhost:3000/api/campuses/1
router.get('/:id', (req,res) =>{
	Campus.findByPk(req.params.id)
	.then(campus=> res.status(404).send(campus))
	.catch(err => console.log(err))
})

//POST localhost:3000/api/campuses //issues with duplicates
router.post('/', (req,res)=>{
	console.log(req.body);
	campuses.push(req.body);
	res.status(201).send(campuses);
})

//PUT localhost:3000/api/campuses/1
router.put('/:id', (req,res)=>{
	let index = findById(req.params.id);
	if(index != -1)
	{
		campuses[req.params.id] = req.body;
		res.status(201).send(campuses);
	}
	else
	{
		res.status(402).send();
	}
})

//DELETE localhost:3000/api/campuses/1
router.delete('/:id', (req,res)=>{
	Campus.findByPk(req.params.id)
	.then(campus => campus.destroy())
})

module.exports = router;
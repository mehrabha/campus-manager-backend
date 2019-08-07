const express = require('express');
const router = express.Router();

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
	res.status(200).send(campuses);
})

//GET localhost:3000/api/campuses/1
router.get('/:id', (req,res) =>{
	if(findById(req.params.id) != -1)
	{
		res.status(200).send(campuses[req.params.id]);
	}
	else
	{
		console.log("Invalid ID");
		res.status(404).send();
	}
})

//POST localhost:3000/api/campuses
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
	let index = findById(req.params.id);
	if( index != -1)
	{
		campuses.splice(index,1);//removes one element starting from position index
		res.status(201).send(campuses);
	}
	else{
		console.log("Cannot delete selected element.");
		res.status(402).send();
	}
})

module.exports = router;
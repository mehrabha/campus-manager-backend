const express = require('express');
const router1 = express.Router();
const Campus = require('../Database/Models/Campuses');
const Student = require('../Database/Models/Students');

//GET localhost:3000/api/students
router1.get('/', (req,res) =>{
	Student.findAll({ include: [Campus] }) //Eager Loading
	.then(students => res.status(200).json(students))
	.catch(err => console.log(err))
})

//GET localhost:3000/api/students/1
router1.get('/:id', (req,res) =>{
	Student.findByPk(req.params.id)
	.then(student=> res.status(200).send(student))
	.catch(err => console.log(err))
})

//POST localhost:3000/api/students
router1.post('/', async (req,res)=>{
	let data = req.body;
	await Student.create({
		name: data.name,
        img: data.img,
        gpa: data.gpa
	});
	console.log('User added');

	Student.findAll({ include: [Campus] }) //Eager Loading
	.then(students => res.status(201).json(students))
})

//PUT localhost:3000/api/students/1
router1.put('/:id', async(req,res)=>{
	let data = req.body;
	await Student.update(	//information to update it with
		{
			name: data.name,
            img: data.img,
            gpa: data.gpa
		},
		{where: { id: req.params.id}}		//location in the database to update
	)
		
	console.log("entry has been updated");
	await Student.findAll({ include: [Campus] })
	.then(students => res.status(201).json(students))
	.catch(err => console.log(err))
})

//DELETE localhost:3000/api/students/1
router1.delete('/:id', async (req,res)=>{
	await Student.destroy({ where: {id : req.params.id}});
	console.log("entry DESTORYED");

	await Student.findAll({ include: [Campus] })
		.then(students => res.status(201).json(students))
		.catch(err => console.log(err))
})

module.exports = router1;
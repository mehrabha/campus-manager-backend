const {Students, Campuses} = require('../DatabaseModels/Models');

//import dummy data
const students = require('../Data/Students');
const campuses = require('../Data/campuses');

const populateStudentsTable = async (students)=>{
    for(let i = 0; i < students.length; i++)
    {
        let current = students[i];
        let buildStudent = await Students.build(current);
    }
}

const populateCampusesTable = async (campuses)=>{
    for(let i = 0; i < campuses.length; i++)
    {
        let current = campuses[i];
        let buildCampus = await Campuses.build(current);
    }
}

const seedDatabase = async ()=>{
    try{
        await populateStudentsTable(students);
        await populateCampusesTable(campuses);
        console.log("Database has been seeded");
        process.exit(0);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

seedDatabase();
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { resolve } = require("path");
const { get } = require("http");

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
//Global variables
let userObject = {
    name: '',
    id: '',
    email: '',
    role: ''
}

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your full name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your full email address?',
            name: 'email',
        },
        {
            type: 'list',
            message: 'What is your role?',
            choices: ['Emplopyee', 'Engineer', 'Intern', 'Manager'],
            name: 'role',

        }])
    .then(answers => {
        // 
        //get info out of the answers object and additional oparation with the role and name, id, email send the information to the constructor 
        userObject = {
            name: answers.name,
            id: answers.id,
            email: answers.email,
            role: answers.role
        }
        console.log(userObject.role);
        if (userObject.role === "Engineer") {
            console.log("chose Engineer");

        } else if (userObject.role === "Intern") {
            console.log("chose Intern");
        } else if (userObject.role === "Manager") {
            console.log("chose Manager");
        }
    })

//take that response and for the last list and bring another function
//Write an async funtion





//console.log(response) //returns an object of the users response
//use fs to write to the readme file
// questions(({ ...response }))


// function call to initialize program
// init();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!

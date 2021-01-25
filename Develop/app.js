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



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function getEmployeeInfo() {
    return new Promise(resolve => {
        const genQuestions = [
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

            }]
    })
}

inquirer.prompt(genQuestions).then(response => {
    switch (response.employeeType) {
        case "Manager":
            const man = [
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'Enter the office number of the manager:'
                },
                {
                    type: 'list',
                    name: 'again',
                    message: 'Would you like to input the information of another employee?',
                    choices: ['Yes', 'No']
                }
            ];
            inquirer.prompt(man).then(answer => {
                resolve.name([answer.again === 'Yes', new Manager(response.name, response.ID, response.email, answer.officeNumber)]);
            });
            break;
        case "Engineer":
            const eng = [
                {
                    type: 'input',
                    message: 'Enter the Github username of the engineer:',
                    name: 'github'
                },
                {
                    type: 'list',
                    message: 
                }

            ]
    }
})




//console.log(response) //returns an object of the users response
//use fs to write to the readme file
questions(({ ...response }))


// function call to initialize program
init();

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

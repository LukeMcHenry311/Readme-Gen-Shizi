// TODO: Include packages needed for this application
const fs = require ('fs');
const markdown = require('./utils/generateMarkdown');
const path = require('path');
const inquirer = require('inquirer');
console.log(`answer questions`);
// TODO: Create an array of questions for user input
// TODO: make order follow readme-guide such as 
// name, github name, project name, project description, technologies used,
// github link, installation, instructions and examples, licenses, tests, emails
// function questions() {
//     inquirer
//     .prompt([
//     {
//         type: 'input',
//         name: 'name',
//         message: 'what is your name'
//     },
//     {
//         type: 'input',
//         name: 'gname',
//         message: 'what is your github username?'
//     },
//     {
//         type: 'input',
//         name: 'description',
//         message: 'description of your project'
//     },
//     {
//         type: 'checkbox',
//         name: 'technologies',
//         message: 'what languages did you use?',
//         choices: ['Javascript', 'HTML', 'CSS', 'Python']
//     },
//     {
//         type: 'input',
//         name: 'glink',
//         message: 'URL of the deployed application'
//     },
//     {
//         type: 'input',
//         name: 'installation',
//         message: 'how can the user install your project?'
//     },
//     {
//         type: 'input',
//         name: 'instructions',
//         message: 'explain how to use the project'
//     },
//     // licenses, tests, emails
//     {
//         type: 'checkbox',
//         name: 'licenses',
//         message: 'what license would you like to use',
//         choices: ['MIT License', 'Apache 2.0', 'GNU v3.0']
//     },
//     {
//         type: 'input',
//         name: 'test',
//         message: 'what are your test instructions'
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'what is your email'
//     },
//     {
//         type: 'checkbox',
//         name: 'create',
//         message: 'what helped you create this project (if any)',
//         choices: ['collaborators', 'lessons', 'tutorials', 'none']
//     }
// ])};

function questions() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is your name?'
        },
        {
            type: 'input',
            name: 'gname',
            message: 'what is your github username?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'description of your project'
        },
        {
            type: 'checkbox',
            name: 'technologies',
            message: 'what languages did you use?',
            choices: ['Javascript', 'HTML', 'CSS', 'Python']
        },
        {
            type: 'input',
            name: 'glink',
            message: 'URL of the deployed application'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'how can the user install your project?'
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'explain how to use the project'
        },
        // licenses, tests, emails
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'what license would you like to use',
            choices: ['MIT License', 'Apache 2.0', 'GNU v3.0']
        },
        {
            type: 'input',
            name: 'test',
            message: 'what are your test instructions'
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your email'
        },
        {
            type: 'checkbox',
            name: 'create',
            message: 'what helped you create this project (if any)',
            choices: ['collaborators', 'lessons', 'tutorials', 'none']
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}
// seen as a reference at https://stackoverflow.com/questions/62597209/trying-to-generate-a-readme-using-nodejs
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions())
}

// inquirer.prompt(questions)
// .then((inquirerResponse, data) => {   
//     console.log("Making ReadMe");
//     fs.writeToFile("vex.md", markdown, data);
// })
// .catch((err) => {
//     console.log(err);
// })

// Function call to initialize app
init();

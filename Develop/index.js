// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
function questions() {
    inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'what is the title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'description of the project'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'motivation for the project'
    },
    {
        type: 'input',
        name: 'why',
        message: 'why did you create this project'
    },
    {
        type: 'input',
        name: 'problem',
        message: 'what problem does your project solve'
    },
    {
        type: 'input',
        name: 'learn',
        message: 'what did you learn'
    },
    {
        type: 'input',
        name: 'special',
        message: 'what makes your project special'
    }
]) }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

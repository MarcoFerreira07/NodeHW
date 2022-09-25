const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'person',
        },
        {
            type: 'input',
            message: 'Project title?',
            name: 'project',
        },
        {
            type: 'checkbox',
            message: 'What languages were used in this project',
            name: 'languages',
            choices: ["HTML", "Javascript", "CSS", "Python", "C#"]
        },
        {
            type: 'list',
            message: 'What is your preferred method of communication',
            name: 'communication',
            choices: ["email", "call", "text"]
        },
        {
            type: 'input',
            message: 'Usage?',
            name: 'usage',

        },
        {
            type: 'input',
            message: 'License',
            name: 'license',

        },
        {
            type: 'input',
            message: 'Contributing',
            name: 'Contributing',

        },
        {
            type: 'input',
            message: 'Tests',
            name: 'tests',

        },
        {
            type: 'input',
            message: 'Questions?',
            name: 'questions',

        }


    ])
//.then((response)=> {
//
//
//    let readMeTemplate = `
//    # ${response.name}
//    # ${response.project}
//    # ${response.languages}
//    # ${response.communication}
//    # ${response.usage}
//    # ${response.license}
//    # ${response.contributing}
//    # ${response.tests}
//    # ${response.questions}
//    `
//
//
//})
//function writeToFile(fileName, data){
//    fs.writeFile(fileName, data, (err) =>{
//        if (err) {
//            return console.log(err)
//        }
//        console.log("You can preview your README file")
//    })
//}    
fs.writeFile('README.md', readMeTemplate, (err) =>
    err ? console.error(err) : console.log('Success!'));
console.log(response)

function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README.md", generateMarkdown(userInput));
        })
}

//TODO: Create a function to initialize app
// Function call to initialize app
init();

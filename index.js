const fs = require('fs');
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");

const init = ()  => {
    inquirer
    .prompt ([
        {
            type: 'input',
            name: 'manName',
            message: "What is the Team Manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Employee id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'room',
            message: 'What is your office number?'
        },
        {
            type: 'confirm',
            name: 'add',
            message: 'Would you like to add another employee?',
            default: false,
        }
    ]) .then(answers => {
        const manager = new Manager(answers.manName, answers.id, answers.email, answers.room);
        console.log(manager);
    });
};

init ();
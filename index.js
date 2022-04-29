const fs = require("fs");
const inquirer = require("inquirer");
const template = require("./src/page.template.js");
const Employee = require("./lib/employee");

// Saves data to an array
const teamBuild = [];

// Ask the user for the information
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the Team Manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your Employee id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "room",
    message: "What is your office number?",
  },
  {
    type: "confirm",
    name: "add",
    message: "Would you like to add another employee?",
    default: false,
  },
];

// To create the employee card
function init() {
  inquirer.prompt(questions).then((data) => {
    const employee = new Employee(data.name, data.id, data.email, data.room);
    teamBuild.push(employee);
    writeToFile();
  }
  );
}

// Starts up the whole thing
init();

// To write the actual file
function writeToFile() {
  fs.writeFile("./dist/employeeCards.html", template(teamBuild), error => {
    if (error) throw error;
    console.log("Created file succesfully!");
})
}


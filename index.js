const fs = require("fs");
const inquirer = require("inquirer");
const generateHtml = require("./src/page.template");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// Saves data to an array
const teamBuild = [];

// Ask the user for the information
const makeRole = async () => {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
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
      type: "list",
      name: "chooseClass",
      message: "What class is this Employee?",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]);

  // Adds Roles and specific info for Roles
  if (answer.chooseClass === "Manager") {
    const manAns = await inquirer.prompt([
      {
        type: "input",
        name: "room",
        message: "What is your office number?",
      },
    ]);
    const manager = new Manager(
      answer.name,
      answer.chooseClass,
      answer.id,
      answer.email,
      manAns.room
    );
    console.log(manager);
    teamBuild.push(manager);
  } else if (answer.chooseClass === "Engineer") {
    const engAns = await inquirer.prompt([
      {
        type: "input",
        name: "github",
        message: "What is your Github username?",
      },
    ]);
    const engineer = new Engineer(
      answer.name,
      answer.chooseClass,
      answer.id,
      answer.email,
      engAns.github
    );
    console.log(engineer);
    teamBuild.push(engineer);
  } else if (answer.chooseClass === "Intern") {
    const internAns = await inquirer.prompt([
      {
        type: "input",
        name: "school",
        message: "What is your school?",
      },
    ]);
    const intern = new Intern(
      answer.name,
      answer.chooseClass,
      answer.id,
      answer.email,
      internAns.school
    );
    console.log(intern);
    teamBuild.push(intern);
  }
  // Allows more employees to be added
  const newEmployee = await inquirer.prompt([
    {
      type: "confirm",
      name: "newEmployee",
      message: "Would you like to add another employee?",
    }
  ]);
  if (newEmployee.newEmployee) {
    return makeRole();
  } else {
    console.log(teamBuild)
    return writeToFile();
  }
};

// To write the HTML file
function writeToFile(fileName, answer) {
  return fs.writeFile("./dist/team.html", generateHtml(teamBuild), (error) => {
    if (error) throw error;
    console.log("Created file succesfully!");
  });
}

// Starts up the whole thing
makeRole();

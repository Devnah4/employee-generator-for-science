const index = require('../index')
const Manager = require('../lib/manager')
const Engineer = require('../lib/engineer')
const Intern = require('../lib/intern')


function managerCard(manager) {
    return`
    <div class="card">
            <div class="manager-header">
                <h2>${manager.name}</h2>
                <p>${manager.role}</p>
            </div>
            <div class="card-body">
            <ul>
                <li>ID: ${manager.id}</li>
                <li>Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li>Office Number: ${manager.room}</li>
            </ul>    
            </div>
    </div>`
}

function engineerCard(engineer) {
    return`
    <div class="card">
            <div class="engineer-header">
                <h2>${engineer.name}</h2>
                <p>${engineer.role}</p>
            </div>
            <div class="card-body">
            <ul>
                <li>ID: ${engineer.id}</li>
                <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li>GitHub: <a href="https://github.com/${engineer.github}" target="_blank" >${engineer.github}</a></li>
            </ul>    
            </div>
    </div>`
}

function internCard(intern) {
    return`
    <div class="card">
            <div class="intern-header">
                <h2>${intern.name}</h2>
                <p>${intern.role}</p>
            </div>
            <div class="card-body">
            <ul>
                <li>ID: ${intern.id}</li>
                <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li>School: ${intern.school}</li>
            </ul>    
            </div>
    </div>`
}



const generateHtml = (teamBuild) => {
     let employeeHtml = teamBuild.map(employee => {
        if (employee instanceof Manager) {
            return managerCard(employee)
        } else if (employee instanceof Engineer) {
            return engineerCard(employee)
        } else if (employee instanceof Intern) {
            return internCard(employee)
        }
    }).join('')

    return `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee List</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        
    <header>
        <h1 class="col-12 col-md-12 col-sm-12">Employee List</h1>
    </header>
    
    <div class="employee-box">
        ${employeeHtml}
    </div>
    
    </body>
    </html>`;
}

module.exports = generateHtml;

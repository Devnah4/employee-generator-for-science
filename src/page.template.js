const index = require('../index')
const Manager = require('../lib/manager')
const Engineer = require('../lib/engineer')
const Intern = require('../lib/intern')


function managerCard(manager) {
    return`
    <div class="card">
            <div class="card-header">
                <h2>${manager.name}</h2>
            </div>
            <div class="card-body">
            <ul>
                <li>ID: ${manager.id}</li>
                <li>Email: ${manager.email}</li>
                <li>Office Number: ${manager.room}</li>
            </ul>    
            </div>
    </div>`
}

function engineerCard(engineer) {
    return`
    <div class="card">
            <div class="card-header">
                <h2>${engineer.name}</h2>
            </div>
            <div class="card-body">
            <ul>
                <li>ID: ${engineer.id}</li>
                <li>Email: ${engineer.email}</li>
                <li>GitHub: ${engineer.github}</li>
            </ul>    
            </div>
    </div>`
}

function internCard(intern) {
    return`
    <div class="card">
            <div class="card-header">
                <h2>${intern.name}</h2>
            </div>
            <div class="card-body">
            <ul>
                <li>ID: ${intern.id}</li>
                <li>Email: ${intern.email}</li>
                <li>Office Number: ${intern.room}</li>
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
    </head>
    <body>
        
    <header>
        <h1>Employee List</h1>
    </header>
    
    <div class="employee-box">
        <div class="employee-cards">
        ${employeeHtml}
        </div>  
    </div>
    
    </body>
    </html>`;
}

module.exports = generateHtml;

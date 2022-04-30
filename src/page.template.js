const index = require('../index')
const Employee = require('../lib/employee')

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
    for (engineer.length, )
    return`
    <div class="card">
            <div class="card-header">
                <h2>${engineer.name}</h2>
            </div>
            <div class="card-body">
            <ul>
                <li>ID: ${engineer.id}</li>
                <li>Email: ${engineer.email}</li>
                <li>Office Number: ${engineer.room}</li>
            </ul>    
            </div>
    </div>`
}

function internCard(intern) {
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



const generateHtml = (teamBuild) => {
    let employeeHtml = teamBuild.map(employee => {
        let role = employee.getRole()
        if manager === role then managerCard(employee)
        if engineer == role then engineerCard(employee)
        if intern == role then internCard(employee)
    }).join()

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

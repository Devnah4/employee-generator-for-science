const index = require('../index')
const Employee = require('../lib/employee')

// Generate Card Based on employee class
module.exports = (generateHtml) => {

    return `
    <!DOCTYPE html>
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
        <div class="card">
        <div class="card-header">
            <h2>${Employee.name}</h2>
        </div>
        <div class="card-body">
        <ul>
            <li>ID: ${Employee.id}</li>
            <li>Email: ${Employee.email}</li>
            <li>Office Number: ${Employee.officeNumber}</li>
        </ul>    
        </div>
    </div>
        </div>   
    </div>
    
    </body>
    </html>`;
};

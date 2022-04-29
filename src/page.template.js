// Generate Card Based on employee class
const employeeCard = employee => {
  
    return `
    <div class="card">
        <div class="card-header">
            <h2>${employee.name}</h2>
        </div>
        <div class="card-body">
        <ul>
            <li>ID: ${employee.id}</li>
            <li>Email: ${employee.email}</li>
            <li>Office Number: ${employee.officeNumber}</li>
        </ul>    
        </div>
    </div>
    `;
};


module.exports = generateHtml => {

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
        ${employeeCard}
        </div>   
    </div>
    
    </body>
    </html>`;
};

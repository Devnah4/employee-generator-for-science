class Manager {
    constructor (name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
}

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'

// getRole() // Overridden to return 'Manager'

module.exports = Manager;
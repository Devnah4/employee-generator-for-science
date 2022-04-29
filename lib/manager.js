class Manager {
    constructor (name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    getName() {
        return {
            name: this.name
        };
    }
    
    getId() {
        return {
            id: this.id
        };
    }
    
    getEmail() {
        return {
            email: this.email
        };
    }
    
    getRole() {
        return {
            role: "Manager"
        };
    }
}

module.exports = Manager;
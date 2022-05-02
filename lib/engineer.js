const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, role, id, email, github) {
    super(name, role, id, email);
    this.github = github;
  }

  getgithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
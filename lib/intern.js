const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, role, id, email, school) {
    super(name, role, id, email);
    this.school = school;
  }

  getschool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, role, id, email, room) {
    super(name, role, id, email);
    this.room = room;
  }

  getOfficeNumber() {
    return this.room;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;

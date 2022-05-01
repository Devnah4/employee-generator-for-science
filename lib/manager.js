const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, room) {
    super(name, id, email);
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

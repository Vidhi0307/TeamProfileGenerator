const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, OffcNumber) {
        super(name, id, email)
        this.OffcNumber = OffcNumber
    }
    getRole() {
        return 'Manager'
    }
    getOfficeNumber() {
        return this.OffcNumber
    }

}

module.exports = Manager;

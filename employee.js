//root class for all the employees
class Employee {
    //constructor for employee  
    constructor(id, name, email) {

        this.name = name;
        this.id = id;
        this.email = email;

    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }


}

module.exports = Employee;
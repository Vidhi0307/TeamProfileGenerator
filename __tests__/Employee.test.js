const Employee = require("../lib/Employee");

test("ccalling the constructor should instantiate Employee instance", () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe("object");
});

test("Should set name by passing constructor arguments", () => {
    const name = "Ted";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Can set id by passing constructor argument", () => {
    const test = 100;
    const employee = new Employee("name", test);
    expect(employee.id).toBe(test);
});

test("Should set email by passing constructor argument", () => {
    const test = "test@test.com";
    const employee = new Employee("name", 1, test);
    expect(employee.email).toBe(test);
});

test("Should get name when calling getName()", () => {
    const test = "Ted";
    const employee = new Employee(test);
    expect(employee.getName()).toBe(test);
});

test("Should get id when calling getId()", () => {
    const test = 100;
    const employee = new Employee("name", test);
    expect(employee.getId()).toBe(test);
});

test("Should get email when calling method getEmail()", () => {
    const test = "test@test.com";
    const employee = new Employee("name", 1, test);
    expect(employee.getEmail()).toBe(test);
});

test("getRole() should return \"Employee\"", () => {
    const test = "Employee";
    const employee = new Employee("name", 1, "test@test.com");
    expect(employee.getRole()).toBe(test);
});

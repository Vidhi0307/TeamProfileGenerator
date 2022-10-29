const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Should set office number when passed as constructor argument", () => {
    const test = 100;
    const manager = new Manager("name", 1, "test@test.com", test);
    expect(manager.OffcNumber).toBe(test);
});

test("getRole() should return \"Manager\"", () => {
    const test = "Manager";
    const manager = new Manager("name", 1, "test@test.com", 100);
    expect(manager.getRole()).toBe(test);
});

test("Can get office number via getOffice()", () => {
    const test = 100;
    const manager = new Manager("name", 1, "test@test.com", test);
    expect(manager.getOfficeNumber()).toBe(test);
});

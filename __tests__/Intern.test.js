const Intern = require("../lib/Intern");

test("Should set school when passed as an argument constructor", () => {
    const test = "TAFE";
    const intern = new Intern("name", 1, "test@test.com", test);
    expect(intern.school).toBe(test);
});

test("getRole() should return \"Intern\"", () => {
    const test = "Intern";
    const intern = new Intern("name", 1, "test@test.com", "TAFE");
    expect(intern.getRole()).toBe(test);
});

test("Should get school when calling getSchool()", () => {
    const test = "TAFE";
    const intern = new Intern("name", 1, "test@test.com", test);
    expect(intern.getSchool()).toBe(test);
});

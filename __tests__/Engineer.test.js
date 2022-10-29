const Engineer = require("../lib/Engineer");

test("Should set GitHUb account name when calling constructor", () => {
    const test = "GitHubUser";
    const engineer = new Engineer("name", 1, "test@test.com", test);
    expect(engineer.github).toBe(test);
});

test("getRole() should return \"Engineer\"", () => {
    const test = "Engineer";
    const engineer = new Engineer("name", 1, "test@test.com", "GitHubUser");
    expect(engineer.getRole()).toBe(test);
});

test("Should get GitHub username when calling getGithub()", () => {
    const test = "GitHubUser";
    const engineer = new Engineer("name", 1, "test@test.com", test);
    expect(engineer.getGithub()).toBe(test);
});

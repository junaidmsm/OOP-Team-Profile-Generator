const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "Junaid";
    const employeeInstance = new Engineer("Junaid", 2, "mjunaid@live.co.uk", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "Junaid";
    const employeeInstance = new Engineer("James", 2, "mjunaid@live.co.uk", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Junaid", 2, "mjunaid@live.co.uk", "Junaid");
    expect(employeeInstance.getRole()).toBe(returnValue);
});

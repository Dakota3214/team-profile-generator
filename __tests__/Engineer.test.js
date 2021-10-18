const Engineer = require("../lib/Engineer");

test('creates engineer object', () => {
    const engineer = new Engineer("Dakota", 2, "dakota.donaldson17@icloud.com", "github");
  
    expect(engineer.name).toStrictEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

});

test("gets engineer's name value", () => {
    const engineer = new Engineer("Dakota", 1, "dakota.donaldson17@icloud.com", "github");
  
    expect(engineer.getName()).toBe(engineer.name);
});
  
test("gets engineer's ID value", () => {
    const engineer = new Engineer("Dakota", 1, "dakota.donaldson17@icloud.com", "github")

    expect(engineer.getId()).toBe(engineer.id);
});
  
test("gets engineer's email address", () => {
    const engineer = new Engineer("Dakota", 1, "dakota.donaldson17@icloud.com", "github");

    expect(engineer.getEmail()).toBe(engineer.email);
});

test("gets engineer's github account", () => {
    const engineer = new Engineer("Dakota", 1, "dakota.donaldson17@icloud.com", "github")

    expect(engineer.getGithub()).toBe(engineer.github);
});
  
test("gets engineer's role", () => {
    const engineer = new Engineer("Dakota", 1, "dakota.donaldson17@icloud.com", "github")

    expect(engineer.getRole()).toBe("Engineer");
});

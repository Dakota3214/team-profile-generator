const Manager = require("../lib/Manager");

test('creates manager object', () => {
    const manager = new Manager("Dakota", 2, "dakota.donaldson17@icloud.com", 2201);
  
    expect(manager.name).toStrictEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

});

test("gets manager's name value", () => {
    const manager = new Manager("Dakota", 1, "dakota.donaldson17@icloud.com", 2201);
  
    expect(manager.getName()).toBe(manager.name);
});
  
test("gets manager's ID value", () => {
    const manager = new Manager("Dakota", 1, "dakota.donaldson17@icloud.com", 2201)

    expect(manager.getId()).toBe(manager.id);
});
  
test("gets manager's email address", () => {
    const manager = new Manager("Dakota", 1, "dakota.donaldson17@icloud.com", 2201);

    expect(manager.getEmail()).toBe(manager.email);
});

test("gets manager's office number", () => {
    const manager = new Manager("Dakota", 1, "dakota.donaldson17@icloud.com", 2201)

    expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
});
  
test("gets manager's role", () => {
    const manager = new Manager("Dakota", 1, "dakota.donaldson17@icloud.com", 2201)

    expect(manager.getRole()).toBe("Manager");
});

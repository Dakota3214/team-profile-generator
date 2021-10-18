

const Employee = require('../lib/Employee.js');


test('creates employee object', () => {
  const employee = new Employee("Dakota", 1, "dakota.donaldson17@icloud.com");

  expect(employee.name).toStrictEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name value", () => {
  const employee = new Employee("Dakota", 1, "dakota.donaldson17@icloud.com");

  expect(employee.getName()).toBe(employee.name);
});

test("gets employee's ID value", () => {
  const employee = new Employee("Dakota", 1, "dakota.donaldson17@icloud.com")

  expect(employee.getId()).toBe(employee.id);
});

test("gets employee's email address", () => {
  const employee = new Employee("Dakota", 1, "dakota.donaldson17@icloud.com");

  expect(employee.getEmail()).toBe(employee.email);
});



const Employee = require('../lib/Employee.js');


test('creates employee object', () => {
  const employee = new Employee("Dakota", 1, "dakota.donaldson17@icloud.com");

  expect(employee.name).toBe(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name value", () => {
  const employee = new Employee("Dakota", 1, "dakota.donaldson17@icloud.com");

  expect(employee.getName()).toBe(expect.stringContaining(employee.name));
  //Current train of thoughts(1): getName() has to include the employee.name, how to connect these two?
  //Once COT(1) is done, go back to COT(2) in Employee.js
});
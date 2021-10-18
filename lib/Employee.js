

// Creates Employee object
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // Gets Employee's name value
  getName() {
    return this.name;
  }

  // Gets Employee's ID value
  getId() {
    return this.id;
    
  }

  // Gets Employee's Email value
  getEmail() {
    return this.email;
  }

};


module.exports = Employee;
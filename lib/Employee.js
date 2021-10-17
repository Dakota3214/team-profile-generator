const inquirer = require("inquirer");


// Creates Employee object
function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
};

// Gets Employee's name value
Employee.prototype.getName = function() {
  
    inquirer
  .prompt([
    {
        name: "employeeName",
        type: "input",
        message: "What is your Employee's name?"
    }
  ])
  .then(({ name }) => {    // Current train of thoughts(2): run inquirer in index.js only? then what would we put here...
    return name; 
  })
  
  

};




module.exports = Employee;
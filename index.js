const inquirer = require("inquirer");

managerQues = [
    {
        name: "managerName",
        type: "input",
        message: "Welcome to the Team Profile Generator! What is the team manager's name?",
    },
    {
        name: "employeeId",
        type: "number",
        message: "What is the manager's ID?",
    },
    {
        name: "email",
        type: "input",
        message: "What is the manager's email address?",
    },
    {
        name: "officeNumber",
        type: "number",
        message: "What is the manger's office number?",
    }
];

const promptUser = employeeArr => {
 

    if (employeeArr) {
        inquirer
            .prompt(managerQues) 
                .then((manager) => {
                    managerObj = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                    console.log(managerObj);
                    employeeArr.push(managerObj);
                })            
    }  
    console.log(employeeArr);
        
};


init = function() {
    const employeeArr = [];
    promptUser(employeeArr);
}

init();

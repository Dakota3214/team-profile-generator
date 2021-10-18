const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");

managerQues = [
    {
        name: "name",
        type: "input",
        message: "Welcome to the Team Profile Generator! What is the team manager's name?",
    },
    {
        name: "id",
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

engineerQues = [
    {
        name: "name",
        type: "input",
        message: "What is the engineer's name?",
    },
    {
        name: "id",
        type: "number",
        message: "What is the engineer's ID?",
    },
    {
        name: "email",
        type: "input",
        message: "What is the engineer's email address?",
    },
    {
        name: "github",
        type: "number",
        message: "What is the engineer's github?",
    }
]

function getRole(employeeArr) {

    inquirer
    .prompt([
        {
            name: "role",
            type: "list",
            choices: ["Engineer", "Intern", "none"],
            message: "Which team role would you like to add?",
        }

    ]) .then((answers) => {
        if (answers.role === "Engineer") {
            inquirer
                .prompt(engineerQues)
                    .then((engineerObj) => {
                        engineerObj = new Engineer(engineerObj.name, engineerObj.id, engineerObj.email, engineerObj.github);
                        employeeArr.push(engineerObj);
                        console.log(employeeArr);
                        return promptUser(employeeArr);
                    })
        }
    })

   
} 



const promptUser = employeeArr => {
    

    if (employeeArr.length === 0) {
        inquirer
            .prompt(managerQues) 
                .then((managerObj) => {
                    managerObj = new Manager(managerObj.name, managerObj.id, managerObj.email, managerObj.officeNumber);
                    let managerArr = employeeArr.push(managerObj);
                    console.log(managerArr);
                    return promptUser(managerArr);
                })            
    }  else {
        inquirer
            .prompt([
                {
                    name: "confirm",
                    type: "confirm",
                    message: "Would you like to add a team member?",
                }
            ]) .then((answer) => {
                if (answer.confirm === true) {
                    getRole(employeeArr);
                } else {
                    console.log(employeeArr);
                    // displayTeam();
                }
            })
    }
        
};


init = function() {  
    const employeeArr = [];
    promptUser(employeeArr);
}


init();

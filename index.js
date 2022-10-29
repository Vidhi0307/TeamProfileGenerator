// node modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/html-generator.js");

// lib modules
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


// Array object questions asked in CLI to user
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the team member's name?",
    },

    {
        type: "input",
        name: "id",
        message: "What the team member's id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the team member's email?",
    },
    {
        type: "list",
        name: "role",
        message: "What is team member's role?",
        choices: ["Manager", "Engineer", "Intern"],
    },
];


//prompting questions
//creating team
const TeamArray = [];

const createTeam = () => {
    inquirer
        .prompt(questions)
        .then((answer1) => {

            inquirer
                .prompt([
                    {
                        when: () => answer1.role === "Manager",
                        type: "input",
                        message: "What is their office number",
                        name: "officeNumber",
                    },
                    {
                        when: () => answer1.role === "Engineer",
                        type: "input",
                        message: "What is your Github Username",
                        name: "github",
                    },
                    {
                        when: () => answer1.role === "Intern",
                        type: "input",
                        message: "What is your School's Name",
                        name: "schoolName",
                    },
                    {
                        type: "confirm",
                        message: "Do you want to add another team member?",
                        name: "addMember",
                    },
                ])

                .then((answer2) => {
                    if (answer1.role === "Manager") {
                        const manager = new Manager(answer1.name, answer1.id, answer1.email, answer2.officeNumber);
                        TeamArray.push(manager);
                    }
                    if (answer1.role === "Engineer") {
                        const engineer = new Engineer(answer1.name, answer1.id, answer1.email, answer2.github);
                        TeamArray.push(engineer);
                    }
                    if (answer1.role === "Intern") {
                        const intern = new Intern(answer1.name, answer1.id, answer1.email, answer2.schoolName);
                        TeamArray.push(intern);
                    }
                    if (answer2.addMember) {
                        createTeam();
                    } else {
                        TeamArray.forEach((team) => {
                            console.log(team);

                        });
                        generateHtml();
                    }

                })

                .catch((error) => {
                    console.log(error);
                });




        });
};

function generateHtml() {

    fs.writeFileSync(
        "./output/index.html",
        generateTeam(TeamArray),
        "utf-8"
    );
}

createTeam();
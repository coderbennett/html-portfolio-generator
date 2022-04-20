const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "bio",
        message: "Enter a short bio:"
    },
    {
        type: "input",
        name: "hobby",
        message: "Name one hobby:"
    },
    {
        type: "input",
        name: "food",
        message: "What is your favorite food?"
    },
    {
        type: "input",
        name: "location",
        message: "Please enter your location:"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "linkedin",
        message: "Please enter your LinkedIn URL:"
    }
];

function init() {
    inquirer
        .prompt(questions) 
        .then((answers) => {
            fs.writeFile('index.html', generateHTML(answers), (err)=>{});
        })
        .catch((err) => {}) 
}

init();

function generateHTML(answers) {
    return `<!DOCTYPE html>
<html lang="en" data-theme="business">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/daisyui@2.13.6/dist/full.css" rel="stylesheet" type="text/css" />
    <title>${answers.name}'s Portfolio</title>
</head>
<body>
    <div class="navbar bg-base-100">
        <h1 class=" normal-case text-3xl">Portfolio</a>
    </div>

    <div class="card w-5/6 bg-base-200 shadow-xl m-auto">
        <div class="card-body">
            <h2 class="card-title">${answers.name}'s Portfolio</h2>
            <p>${answers.bio}</p>
            <p>My hobby is ${answers.hobby}</p>
            <p>My favorite food is ${answers.food}</p>
            <p>I am currently living in ${answers.location}</p>
            <div class="divider"></div>
            <p>My github URL is:<a class="btn btn-ghost mx-1" href="https://github.com/${answers.github}" target="_blank">${answers.github}</a></p>
            <p>My linkedin URL is:<a class="btn btn-ghost mx-1" href="${answers.linkedin}" target="_blank">${answers.linkedin}</a></p>
        </div>
        </div>
    
    <script src="https://cdn.tailwindcss.com"></script>
</body>
</html>`
}
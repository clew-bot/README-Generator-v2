const inquirer = require("inquirer");
const fs = require("fs")

const generateMarkdown = require("./utils/generateMarkdown.js");
const path = require("path");
// array of questions for user
const questions = [
{
    type: "input",
    name: "realProjectName",
    message: "What is your next project going to be called? Note: This is the first header of the README."
}, {
    type: "input",
    name: "realGithubName",
    message: "What your username on Github?"
}, {
    type: "input",
    name: "realDescription",
    message: "Write a description of what your application does."
}, {
    type: "input",
    name: "realToC",
    message: "Enter a Table of Contents for your application separated by commas."
}, {
    type: "input",
    name: "realInstallation",
    message: "How do you install your application?"
}, {
    type: "input",
    name: "realUsage",
    message: "What are some real world usage examples for your application?"
}, {
    type: "input",
    name: "realLicense",
    message: "What kind of license does this application have?"
}, {
    type: "input",
    name: "realContributors",
    message: "Enter all contributors"
}, {
    type: "input",
    name: "realFAQ",
    message: "What is the best way to reach you?"
}
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

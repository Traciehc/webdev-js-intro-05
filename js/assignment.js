"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare your two immutable variables
let shiftValue = "Wash the dishes";
let popValue = "Rake the leaves";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

function updateAnswerOne() {
    console.log(todos); 
    answerOneEl.innerHTML = todos.join(",");
}
updateAnswerOne();

function updateAnswerTwo() {
    console.log(todos[2]);
    answerTwoEl.innerHTML = todos[2];
}
updateAnswerTwo();

function removeLastValue() {
    todos.pop();
}
removeLastValue();

function removeFirstValue() {
    todos.shift();
    console.log(todos);
    answerSixEl.innerHTML = todos.join(",");
}
removeFirstValue();

function addShiftAndPopValues() {
    todos.push(shiftValue, popValue);
    console.log(todos); 
    answerFiveEl.innerHTML = todos.join(",");
}
addShiftAndPopValues();

function updateAnswerFour() {
    console.log(todos);
    answerFourEl.innerHTML = todos.join(",");
}
updateAnswerFour();

function reverseTodoList() {
    todos.reverse();
    console.log(todos);
    answerFourEl.innerHTML = todos.join(",");
}
reverseTodoList();

function updateAnswerFive() {
    console.log(todos);
    answerFiveEl.innerHTML = todos.join(",");
}
updateAnswerFive();

function updateAnswerSix() {
    console.log(todos);
    answerSixEl.innerHTML = todos.join(",");
}
updateAnswerSix();

function render() {
    updateAnswerOne();
    updateAnswerTwo();
    removeLastValue(); 
    reverseTodoList(); 
    removeFirstValue(); 
    addShiftAndPopValues(); 
    updateAnswerSix();
}

submissionBtn.addEventListener("click", function () {
    // Update this function
    render();
});
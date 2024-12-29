"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare your two immutable variables
let shiftValue;
let popValue;

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

function updateAnswerTwo() {
    console.log(todos[2]);
    answerTwoEl.innerHTML = todos[2];
}

function removeLastValue() {
    todos.pop();
    popValue = todos.pop();
    console.log(todos);
    
    
}


function removeFirstValue() {
    todos.shift();
    console.log(todos);
    shiftValue = todos.shift();
}


function addShiftAndPopValues() {
    todos.push(shiftValue, popValue);
    console.log(todos.push);
    
    
}


function updateAnswerFour() {
    console.log(todos.pop());
    answerFourEl.innerHTML = todos.join(",");
}

function reverseTodoList() {
   todos.reverse();
   console.log(todos);

}


function updateAnswerFive() {
    console.log(todos.reverse());
    answerFiveEl.innerHTML = todos.join(",");
}

function updateAnswerSix() {
    console.log(todos);
    answerSixEl.innerHTML = todos.join(",");
    
};

function render() {
    updateAnswerOne();
    updateAnswerTwo();
    updateAnswerFour();
    updateAnswerFive();
    updateAnswerSix();
}

submissionBtn.addEventListener("click", function () {
    // Update this function
    render();
});
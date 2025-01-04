"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

let shiftValue;
let popValue;

const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

function updateAnswerOne() {
    console.log(todos);
    answerOneEl.innerHTML = todos.join(", ");
}

function updateAnswerTwo() {
    console.log(todos[2]);
    answerTwoEl.innerHTML = todos[2];
}

function removeLastValue() {
    popValue = todos.pop();
    console.log(todos);
    answerFourEl.innerHTML = todos.join(", ");
}

function reverseTodoList() {
    todos.reverse();
    console.log(todos);
    answerFiveEl.innerHTML = todos.join(", ");
}

function removeFirstValue() {
    shiftValue = todos.shift();
    console.log(todos);
}

function addShiftAndPopValues() {
    todos.push(shiftValue, popValue);
    console.log(todos);
    answerSixEl.innerHTML = todos.join(", ");
}

function render() {
    updateAnswerOne();
    updateAnswerTwo();
    removeLastValue();
    reverseTodoList();
    removeFirstValue();
    addShiftAndPopValues();
}

submissionBtn.addEventListener("click", function () {
    render();
});

import { getData } from "../logic/todo-hub";

const todoDisplay = document.querySelector(".todo-display");

export const displayHub = function() {
    todoDisplay.innerHTML = "";
    for (let category in getData()) {
    }
}
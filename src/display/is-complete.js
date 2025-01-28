import { isComplete } from "../logic/todo-functions";
import { getData } from "../logic/todo-hub";

export function toggleComplete(event) {
    const checkbox = event.target;
    const title = checkbox.dataset.title;
    const toDoHeader = document.querySelector(`.todo-display-header[data-title="${title}"]`);
    const toDoDue = document.querySelector(`.todo-due[data-title="${title}"]`);
    if (checkbox.getAttribute("aria-pressed") === "false") {
        checkbox.setAttribute("aria-pressed", "true"); 
        toDoHeader.style.textDecoration = "line-through";
        toDoDue.style.textDecoration = "line-through";
        isComplete(title, true);
    } else if (checkbox.getAttribute("aria-pressed") === "true") {
        checkbox.setAttribute("aria-pressed", "false"); 
        toDoHeader.style.textDecoration = "none";
        toDoDue.style.textDecoration = "none";
        isComplete(title, false);
    };
    console.log(getData())
};
import { add } from "../logic/todo-functions" 
import { displayHub } from "./display-hub";
export function handleAddToDoClick(event) {
    const toDoButtonContainer = document.querySelectorAll(".todo-button-container");
    const addToDoContainer = document.querySelectorAll(".todo-add-todo");
    const addToDoBtn = document.querySelectorAll(".add-todo");

    for (let element of addToDoContainer) {
        if (element.dataset.category === event.target.dataset.category) {
            element.remove();
        };
    };

    for (let element of toDoButtonContainer) {
        if (element.dataset.category === event.target.dataset.category) {

            const toDoForm = document.createElement("form");
            toDoForm.autocomplete = "off";
            toDoForm.className = "todo-form";
            toDoForm.dataset.category = element.dataset.category;
            toDoForm.addEventListener("submit", toDoSubmit)
            element.prepend(toDoForm);

            const newToDoTitle = document.createElement("input");
            newToDoTitle.className = "todo-form-title";
            newToDoTitle.type = "text";
            newToDoTitle.id = "todo-form-title";
            newToDoTitle.name = "todo-form-title";
            newToDoTitle.placeholder = "Title";
            newToDoTitle.dataset.category = element.dataset.category;
            toDoForm.appendChild(newToDoTitle);
            newToDoTitle.focus();
        };
    };
};

function toDoSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formTitle = formData.get("todo-form-title");
    
    const category = event.target.dataset.category;
    add(category, formTitle);
    displayHub();
}
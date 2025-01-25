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

            const category = element.dataset.category
            const toDoForm = document.createElement("form");
            toDoForm.autocomplete = "off";
            toDoForm.className = "todo-form";
            toDoForm.dataset.category = category;
            toDoForm.addEventListener("submit", toDoSubmit);
            toDoForm.addEventListener("mouseleave", handleMouseLeave);
            element.prepend(toDoForm);

            const newToDoTitle = document.createElement("input");
            newToDoTitle.className = "todo-form-title";
            newToDoTitle.type = "text";
            newToDoTitle.id = "todo-form-title";
            newToDoTitle.name = "todo-form-title";
            newToDoTitle.placeholder = "Title";
            newToDoTitle.dataset.category = category;
            toDoForm.appendChild(newToDoTitle);
            newToDoTitle.focus();
        };
    };
};

function handleMouseLeave(event) {
    const category = event.target.dataset.category;
    event.target.removeEventListener("click", handleMouseLeave);
    event.target.remove();

    const todoButtonContainer = document.querySelector(`div.todo-button-container[data-category="${category}"]`);
    const addToDo = document.createElement("div");
    addToDo.className = "todo-add-todo";
    addToDo.dataset.category = category;
    todoButtonContainer.prepend(addToDo);

    const addToDoButton = document.createElement("button");
    addToDoButton.type = "button";
    addToDoButton.className = "add-todo";
    addToDoButton.textContent = "Add To Do";
    addToDoButton.dataset.category = category;
    addToDoButton.addEventListener("click", handleAddToDoClick);
    addToDo.appendChild(addToDoButton);
};

function toDoSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formTitle = formData.get("todo-form-title");
    
    const category = event.target.dataset.category;
    add(category, formTitle);
    displayHub();
};


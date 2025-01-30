import { add } from "../logic/todo-functions" 
import { displayHub } from "./display-hub";
import { getData } from "../logic/todo-hub";
import { displayToDoIcons } from "./icon-hover";
import { toggleComplete } from "./is-complete";
import { handleEditToDoClick } from "./edit-todo-button";
import { deleteToDo } from "./delete";
import editIcon from "../img/edit.png";
import binIcon from "../img/bin.png";
import { updateLocalStorage } from "../logic/local-storage";

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
    if (!(formTitle in getData()[category].toDo)) {
        add(category, formTitle);
        const toDoDisplayContainer = document.createElement("div");
        toDoDisplayContainer.className = "todo-item";
        toDoDisplayContainer.dataset.title = formTitle;
        toDoDisplayContainer.dataset.category = category;
        const todoItemContainer = document.querySelector(`.todo-item-container[data-category="${category}"]`);
        todoItemContainer.appendChild(toDoDisplayContainer);
        toDoDisplayContainer.addEventListener("mouseenter", displayToDoIcons);

        //Append checkbox
        const checkbox = document.createElement("button");
        checkbox.className = "checkbox";
        checkbox.type = "checkbox-button";
        checkbox.setAttribute("aria-pressed", "false");
        checkbox.dataset.title = formTitle;
        checkbox.dataset.category = category;
        toDoDisplayContainer.appendChild(checkbox);
        checkbox.addEventListener("click", toggleComplete);

        //Append toDo header
        const toDoHeader = document.createElement("p");
        toDoHeader.className = "todo-display-header";
        if (formTitle.length > 53) {
            let shortenedTitle = "";
            for (let character of formTitle) {
                shortenedTitle = shortenedTitle + character;
                if (shortenedTitle.length > 50) {
                    break;
                };
            };
            shortenedTitle = shortenedTitle + "...";
            toDoHeader.textContent = shortenedTitle;
        } else toDoHeader.textContent = formTitle;
        toDoHeader.dataset.title = formTitle;
        toDoHeader.dataset.category = category;
        toDoDisplayContainer.appendChild(toDoHeader);

        //Append due
        const toDoDue = document.createElement("p");
        toDoDue.className = "todo-due";
        const toDoDueDate = getData()[category].toDo[formTitle].due
        toDoDue.textContent = toDoDueDate !== "N/A" ? `(Due: ${toDoDueDate})`: "";
        toDoDue.dataset.title = formTitle;
        toDoDue.dataset.category = category;
        toDoDisplayContainer.appendChild(toDoDue);

        //Append edit button
        const toDoEditButton = document.createElement("button");
        toDoEditButton.className = "todo-edit-button";
        toDoEditButton.classList.add("hidden");
        toDoEditButton.type = "button";
        toDoEditButton.dataset.title = formTitle;
        toDoEditButton.dataset.category = category;
        toDoDisplayContainer.appendChild(toDoEditButton);
        toDoEditButton.addEventListener("click", handleEditToDoClick);

        //Append edit icon
        const toDoEditIcon = document.createElement("img");
        toDoEditIcon.className = "edit-icon";
        toDoEditIcon.alt = "Icon of edit button";
        toDoEditIcon.src = editIcon;
        toDoEditIcon.dataset.title = formTitle;
        toDoEditIcon.dataset.category = category;
        toDoEditButton.appendChild(toDoEditIcon);

        //Append delete button
        const toDoDeleteButton = document.createElement("button");
        toDoDeleteButton.className = "todo-delete-button";
        toDoDeleteButton.classList.add("hidden");
        toDoDeleteButton.type = "button";
        toDoDeleteButton.dataset.title = formTitle;
        toDoDeleteButton.dataset.category = category;
        toDoDisplayContainer.appendChild(toDoDeleteButton);
        toDoDeleteButton.addEventListener("click", deleteToDo);

        //Append delete icon
        const toDoDeleteIcon = document.createElement("img");
        toDoDeleteIcon.className = "delete-icon";
        toDoDeleteIcon.alt = "Icon of delete buttom";
        toDoDeleteIcon.src = binIcon;
        toDoDeleteIcon.dataset.title = formTitle;
        toDoDeleteIcon.dataset.category = category;
        toDoDeleteButton.appendChild(toDoDeleteIcon);
    };
    updateLocalStorage();
};


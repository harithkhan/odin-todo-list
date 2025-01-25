import { add } from "../logic/category-functions";
import { getData } from "../logic/todo-hub";
import { handleAddToDoClick } from "./add-todo";
import editIcon from "../img/edit.png";
import binIcon from "../img/bin.png";

export function handleAddCatClick(event) {
    const category = event.target.dataset.category;
    const toDoButtonContainer = document.querySelector(`.todo-button-container[data-category="${category}"]`);
    const addCatContainer = document.querySelector(`.todo-add-cat[data-category="${category}"]`);
    addCatContainer.remove();

    const catForm = document.createElement("form");
    catForm.autocomplete = "off";
    catForm.className = "todo-form";
    catForm.dataset.category = category;
    catForm.addEventListener("submit", toDoSubmit);
    toDoButtonContainer.appendChild(catForm);

    const newCatTitle = document.createElement("input");
    newCatTitle.className = "cat-form-title";
    newCatTitle.type = "text";
    newCatTitle.id = "cat-form-title";
    newCatTitle.name = "cat-form-title";
    newCatTitle.placeholder = "Title";
    newCatTitle.dataset.category = category;
    catForm.appendChild(newCatTitle);
    newCatTitle.focus();
};

function toDoSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formTitle = formData.get("cat-form-title");
    add(formTitle);
    form.remove();

    const category = event.target.dataset.category;
    const toDoButtonContainer = document.querySelector(`.todo-button-container[data-category="${category}"]`);

    const addCatContainer = document.createElement("div");
    addCatContainer.className = "todo-add-cat";
    addCatContainer.dataset.category = category;
    toDoButtonContainer.appendChild(addCatContainer);

    const addCatButton = document.createElement("button");
    addCatButton.type = "button";
    addCatButton.className = "add-cat";
    addCatButton.textContent = "Add Category";
    addCatButton.dataset.category = category;
    addCatButton.addEventListener("click", handleAddCatClick);
    addCatContainer.appendChild(addCatButton);

    //Append new cat below the clicked addCat button
    const todoDisplay = document.querySelector(".todo-display");
    const todoItemContainer = document.createElement("div");
    todoItemContainer.className = "todo-item-container";
    todoItemContainer.dataset.category = formTitle;
    toDoButtonContainer.insertAdjacentElement("afterend", todoItemContainer);

    const catDisplayContainer = document.createElement("div");
    catDisplayContainer.className = "todo-item";
    todoItemContainer.appendChild(catDisplayContainer);

    //Append h2 cat header
    const catDisplay = document.createElement("h2");
    catDisplay.className = "cat-display";
    catDisplay.textContent = formTitle;
    catDisplayContainer.appendChild(catDisplay);

    //Append due
    const catDue = document.createElement("p");
    catDue.className = "cat-due";
    const dueDate = getData()[category].due;
    catDue.textContent = dueDate !== "N/A" ? `(Due: ${dueDate})`: "";
    catDisplayContainer.appendChild(catDue);

    //Append edit button
    const catEditButton = document.createElement("button");
    catEditButton.className = "cat-edit-button";
    catEditButton.type = "button";
    catDisplayContainer.appendChild(catEditButton);

    //Append edit icon
    const catEditIcon = document.createElement("img");
    catEditIcon.className = "edit-icon";
    catEditIcon.alt = "Icon of edit button";
    catEditIcon.src = editIcon;
    catEditButton.appendChild(catEditIcon);

    //Append delete button
    const catDeleteButton = document.createElement("button");
    catDeleteButton.className = "cat-delete-button";
    catDeleteButton.type = "button";
    catDisplayContainer.appendChild(catDeleteButton);

    //Append delete icon
    const catDeleteIcon = document.createElement("img");
    catDeleteIcon.className = "delete-icon";
    catDeleteIcon.alt = "Icon of delete buttom";
    catDeleteIcon.src = binIcon;
    catDeleteButton.appendChild(catDeleteIcon);




     //Append todo button container and its elements
    const newToDoItemContainer = document.querySelector(`.todo-item-container[data-category="${formTitle}"]`)


    const newButtonContainer = document.createElement("div");
    newButtonContainer.className = "todo-button-container";
    newButtonContainer.dataset.category = formTitle;
    newToDoItemContainer.insertAdjacentElement("afterend", newButtonContainer);

    const addToDo = document.createElement("div");
    addToDo.className = "todo-add-todo";
    addToDo.dataset.category = formTitle;
    newButtonContainer.appendChild(addToDo);

    const addToDoButton = document.createElement("button");
    addToDoButton.type = "button";
    addToDoButton.className = "add-todo";
    addToDoButton.textContent = "Add To Do";
    addToDoButton.dataset.category = formTitle;
    addToDoButton.addEventListener("click", handleAddToDoClick);
    addToDo.appendChild(addToDoButton);

    const addCat = document.createElement("div");
    addCat.className = "todo-add-cat";
    addCat.dataset.category = formTitle;
    newButtonContainer.appendChild(addCat);

    const newAddCatButton = document.createElement("button");
    newAddCatButton.type = "button";
    newAddCatButton.className = "add-cat";
    newAddCatButton.textContent = "Add Category";
    newAddCatButton.dataset.category = formTitle;
    newAddCatButton.addEventListener("click", handleAddCatClick);
    addCat.appendChild(newAddCatButton);
};
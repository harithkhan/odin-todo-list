import { add } from "../logic/category-functions";
import { getData } from "../logic/todo-hub";
import { handleAddToDoClick } from "./add-todo";
import editIcon from "../img/edit.png";
import binIcon from "../img/bin.png";
import { displayCatIcons } from "./icon-hover";
import { handleEditCatClick } from "./edit-cat-button";
import { moveToTrash } from "../logic/category-functions";
import { buildAllCats, attachCatButtonListeners } from "./cat-display";

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
    catForm.addEventListener("mouseleave", handleMouseLeave);
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

function handleMouseLeave(event) {
    const category = event.target.dataset.category;
    event.target.removeEventListener("click", handleMouseLeave);
    event.target.remove();

    const catButtonContainer = document.querySelector(`div.todo-button-container[data-category="${category}"]`);
    const addCat = document.createElement("div");
    addCat.className = "todo-add-cat";
    addCat.dataset.category = category;
    catButtonContainer.appendChild(addCat);

    const addCatButton = document.createElement("button");
    addCatButton.type = "button";
    addCatButton.className = "add-cat";
    addCatButton.textContent = "Add Category";
    addCatButton.dataset.category = category;
    addCatButton.addEventListener("click", handleAddCatClick);
    addCat.appendChild(addCatButton);
};

function toDoSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formTitle = formData.get("cat-form-title");
    if (!(formTitle in getData())) {    
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
        catDisplayContainer.dataset.category = formTitle;
        catDisplayContainer.addEventListener("mouseenter", displayCatIcons);
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
        catEditButton.classList.add("hidden");
        catEditButton.type = "button";
        catEditButton.dataset.category = formTitle;
        catDisplayContainer.appendChild(catEditButton);
        catEditButton.addEventListener("click", handleEditCatClick);

        //Append edit icon
        const catEditIcon = document.createElement("img");
        catEditIcon.className = "edit-icon";
        catEditIcon.alt = "Icon of edit button";
        catEditIcon.src = editIcon;
        catEditIcon.dataset.category = formTitle;
        catEditButton.appendChild(catEditIcon);

        //Append delete button
        const catDeleteButton = document.createElement("button");
        catDeleteButton.className = "cat-delete-button";
        catDeleteButton.classList.add("hidden");
        catDeleteButton.type = "button";
        catDeleteButton.dataset.category = formTitle;
        catDisplayContainer.appendChild(catDeleteButton);
        catDeleteButton.addEventListener("click", moveToTrash);

        //Append delete icon
        const catDeleteIcon = document.createElement("img");
        catDeleteIcon.className = "delete-icon";
        catDeleteIcon.alt = "Icon of delete buttom";
        catDeleteIcon.src = binIcon;
        catDeleteIcon.dataset.category = formTitle;
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
        buildAllCats();
        attachCatButtonListeners();
    };
};
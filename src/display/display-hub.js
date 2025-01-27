import editIcon from "../img/edit.png";
import binIcon from "../img/bin.png";
import { getData } from "../logic/todo-hub";
import { handleAddToDoClick } from "./add-todo";
import { handleAddCatClick } from "./add-cat";
import { handleEditCatClick } from "./edit-cat-button";
import { handleEditToDoClick } from "./edit-todo-button";
import { displayCatIcons } from "./icon-hover";
import { displayToDoIcons } from "./icon-hover";

const todoDisplay = document.querySelector(".todo-display");

export const displayHub = function() {
    todoDisplay.innerHTML = "";

    for (let category in getData()) {

        const todoItemContainer = document.createElement("div");
        todoItemContainer.className = "todo-item-container";
        todoItemContainer.dataset.category = category;
        todoDisplay.appendChild(todoItemContainer);

        const catDisplayContainer = document.createElement("div");
        catDisplayContainer.className = "todo-item";
        catDisplayContainer.dataset.category = category;
        todoItemContainer.appendChild(catDisplayContainer);
        catDisplayContainer.addEventListener("mouseenter", displayCatIcons);

        //Append h2 cat header
        const catDisplay = document.createElement("h2");
        catDisplay.className = "cat-display";
        catDisplay.dataset.category = category;
        catDisplay.textContent = category;
        catDisplayContainer.appendChild(catDisplay);

        //Append due
        const catDue = document.createElement("p");
        catDue.className = "cat-due";
        catDue.dataset.category = category;
        const dueDate = getData()[category].due;
        catDue.textContent = dueDate !== "N/A" ? `(Due: ${dueDate})`: "";
        catDisplayContainer.appendChild(catDue);

        //Append edit button
        const catEditButton = document.createElement("button");
        catEditButton.className = "cat-edit-button";
        catEditButton.classList.add("hidden");
        catEditButton.type = "button";
        catEditButton.dataset.category = category;
        catEditButton.addEventListener("click", handleEditCatClick);
        catDisplayContainer.appendChild(catEditButton);

        //Append edit icon
        const catEditIcon = document.createElement("img");
        catEditIcon.className = "edit-icon";
        catEditIcon.alt = "Icon of edit button";
        catEditIcon.src = editIcon;
        catEditIcon.dataset.category = category;
        catEditButton.appendChild(catEditIcon);

        //Append delete button
        const catDeleteButton = document.createElement("button");
        catDeleteButton.className = "cat-delete-button";
        catDeleteButton.classList.add("hidden");
        catDeleteButton.type = "button";
        catDeleteButton.dataset.category = category;
        catDisplayContainer.appendChild(catDeleteButton);

        //Append delete icon
        const catDeleteIcon = document.createElement("img");
        catDeleteIcon.className = "delete-icon";
        catDeleteIcon.alt = "Icon of delete buttom";
        catDeleteIcon.src = binIcon;
        catDeleteButton.appendChild(catDeleteIcon);

        for (let toDoObj in getData()[category].toDo) {
            const toDoDisplayContainer = document.createElement("div");
            toDoDisplayContainer.className = "todo-item";
            toDoDisplayContainer.dataset.title = toDoObj;
            toDoDisplayContainer.dataset.category = category;
            todoItemContainer.appendChild(toDoDisplayContainer);
            toDoDisplayContainer.addEventListener("mouseenter", displayToDoIcons);

            const checkbox = document.createElement("button");
            checkbox.className = "checkbox";
            checkbox.type = "checkbox-button";
            checkbox.setAttribute("aria-pressed", "false");
            toDoDisplayContainer.appendChild(checkbox);

            //Append toDo header
            const toDoHeader = document.createElement("p");
            toDoHeader.className = "todo-display-header";
            toDoHeader.textContent = toDoObj;
            toDoHeader.dataset.title = toDoObj;
            toDoDisplayContainer.appendChild(toDoHeader);

            //Append due
            const toDoDue = document.createElement("p");
            toDoDue.className = "todo-due";
            const toDoDueDate = getData()[category].toDo[toDoObj].due
            toDoDue.textContent = toDoDueDate !== "N/A" ? `(Due: ${toDoDueDate})`: "";
            toDoDue.dataset.title = toDoObj;
            toDoDisplayContainer.appendChild(toDoDue);

            //Append edit button
            const toDoEditButton = document.createElement("button");
            toDoEditButton.className = "todo-edit-button";
            toDoEditButton.classList.add("hidden");
            toDoEditButton.type = "button";
            toDoEditButton.dataset.title = toDoObj;
            toDoEditButton.dataset.category = category;
            toDoDisplayContainer.appendChild(toDoEditButton);
            toDoEditButton.addEventListener("click", handleEditToDoClick);

            //Append edit icon
            const toDoEditIcon = document.createElement("img");
            toDoEditIcon.className = "edit-icon";
            toDoEditIcon.alt = "Icon of edit button";
            toDoEditIcon.src = editIcon;
            toDoEditIcon.dataset.title = toDoObj;
            toDoEditIcon.dataset.category = category;
            toDoEditButton.appendChild(toDoEditIcon);

            //Append delete button
            const toDoDeleteButton = document.createElement("button");
            toDoDeleteButton.className = "todo-delete-button";
            toDoDeleteButton.classList.add("hidden");
            toDoDeleteButton.type = "button";
            toDoDeleteButton.dataset.title = toDoObj;
            toDoDeleteButton.dataset.category = category;
            toDoDisplayContainer.appendChild(toDoDeleteButton);

            //Append delete icon
            const toDoDeleteIcon = document.createElement("img");
            toDoDeleteIcon.className = "delete-icon";
            toDoDeleteIcon.alt = "Icon of delete buttom";
            toDoDeleteIcon.src = binIcon;
            toDoDeleteIcon.dataset.category = category;
            toDoDeleteButton.appendChild(toDoDeleteIcon);
        };
        //Append todo button container and its elements
        const todoButtonContainer = document.createElement("div");
        todoButtonContainer.className = "todo-button-container";
        todoButtonContainer.dataset.category = category;
        todoDisplay.appendChild(todoButtonContainer);

        const addToDo = document.createElement("div");
        addToDo.className = "todo-add-todo";
        addToDo.dataset.category = category;
        todoButtonContainer.appendChild(addToDo);

        const addToDoButton = document.createElement("button");
        addToDoButton.type = "button";
        addToDoButton.className = "add-todo";
        addToDoButton.textContent = "Add To Do";
        addToDoButton.dataset.category = category;
        addToDoButton.addEventListener("click", handleAddToDoClick);
        addToDo.appendChild(addToDoButton);

        const addCat = document.createElement("div");
        addCat.className = "todo-add-cat";
        addCat.dataset.category = category;
        todoButtonContainer.appendChild(addCat);

        const addCatButton = document.createElement("button");
        addCatButton.type = "button";
        addCatButton.className = "add-cat";
        addCatButton.textContent = "Add Category";
        addCatButton.dataset.category = category;
        addCatButton.addEventListener("click", handleAddCatClick);
        addCat.appendChild(addCatButton);
    };
};
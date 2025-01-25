import editIcon from "../img/edit.png";
import binIcon from "../img/bin.png";
import { getData } from "../logic/todo-hub";

const todoDisplay = document.querySelector(".todo-display");

export const displayHub = function() {
    todoDisplay.innerHTML = "";
    for (let category in getData()) {

        const todoItemContainer = document.createElement("div");
        todoItemContainer.className = "todo-item-container";
        todoDisplay.appendChild(todoItemContainer);

        const catDisplayContainer = document.createElement("div");
        catDisplayContainer.className = "todo-item";
        todoItemContainer.appendChild(catDisplayContainer);

        //Append h2 cat header
        const catDisplay = document.createElement("h2");
        catDisplay.className = "cat-display";
        catDisplay.textContent = category;
        catDisplayContainer.appendChild(catDisplay);

        //Append due
        const catDue = document.createElement("p");
        catDue.className = "cat-due";
        catDue.textContent = `(Due: ${getData()[category].due})`;
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
    }
}
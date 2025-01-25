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

        for (let toDoObj in getData()[category].toDo) {
            const toDoDisplayContainer = document.createElement("div");
            toDoDisplayContainer.className = "todo-item";
            todoItemContainer.appendChild(toDoDisplayContainer);

            const checkbox = document.createElement("button");
            checkbox.className = "checkbox";
            checkbox.type = "checkbox-button";
            checkbox.setAttribute("aria-pressed", "false");
            toDoDisplayContainer.appendChild(checkbox);

            //Append toDo header
            const toDoHeader = document.createElement("p");
            toDoHeader.className = "todo-display-header";
            toDoHeader.textContent = toDoObj;
            toDoDisplayContainer.appendChild(toDoHeader);

            //Append due
            const toDoDue = document.createElement("p");
            toDoDue.className = "todo-due";
            toDoDue.textContent = `(Due: ${getData()[category].due})`;
            toDoDisplayContainer.appendChild(toDoDue);

            //Append edit button
            const toDoEditButton = document.createElement("button");
            toDoEditButton.className = "todo-edit-button";
            toDoEditButton.type = "button";
            toDoDisplayContainer.appendChild(toDoEditButton);

            //Append edit icon
            const toDoEditIcon = document.createElement("img");
            toDoEditIcon.className = "edit-icon";
            toDoEditIcon.alt = "Icon of edit button";
            toDoEditIcon.src = editIcon;
            toDoEditButton.appendChild(toDoEditIcon);

            //Append delete button
            const toDoDeleteButton = document.createElement("button");
            toDoDeleteButton.className = "todo-delete-button";
            toDoDeleteButton.type = "button";
            toDoDisplayContainer.appendChild(toDoDeleteButton);

            //Append delete icon
            const toDoDeleteIcon = document.createElement("img");
            toDoDeleteIcon.className = "delete-icon";
            toDoDeleteIcon.alt = "Icon of delete buttom";
            toDoDeleteIcon.src = binIcon;
            toDoDeleteButton.appendChild(toDoDeleteIcon);
        };        
    };
};
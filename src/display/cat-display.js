import { getData as hub} from "../logic/todo-hub";
import { displayHub } from "./display-hub";
import editIcon from "../img/edit.png";
import binIcon from "../img/bin.png";
import { displayCatIcons, displayToDoIcons } from "./icon-hover";
import { handleEditCatClick } from "./edit-cat-button";
import { handleEditToDoClick } from "./edit-todo-button";
import { deleteCat, deleteToDo } from "./delete";
import { toggleComplete } from "./is-complete";
import { handleAddToDoClick } from "./add-todo";

export function buildAllCats() {
    const catContainer = document.querySelector(".category-container");
    for (let category in hub()) {
        if (category !== "General" && category !== "Trash") {
            const catButton = document.createElement("button");
            catButton.className = "cat-button";
            catButton.type = "button";
            catButton.textContent = category;
            catButton.dataset.category = category;
            const generalButton = document.getElementById("general-cat-button");
            generalButton.insertAdjacentElement("afterend", catButton);
        } else if (category === "Trash") {
            const catButton = document.createElement("button");
            catButton.className = "cat-button";
            catButton.type = "button";
            catButton.textContent = category;
            catButton.dataset.category = category;
            catContainer.appendChild(catButton);
        };
    };
};

export function showThisCat(event) {
    const toDoDisplay = document.querySelector(".todo-display");
    toDoDisplay.innerHTML = "";
    const category = event.target.dataset.category;

    const todoItemContainer = document.createElement("div");
    todoItemContainer.className = "todo-item-container";
    todoItemContainer.dataset.category = category;
    toDoDisplay.appendChild(todoItemContainer);

    const catDisplayContainer = document.createElement("div");
    catDisplayContainer.className = "todo-item";
    catDisplayContainer.dataset.category = category;
    todoItemContainer.appendChild(catDisplayContainer);
    if (category !== "General" && category !== "Trash") {
        catDisplayContainer.addEventListener("mouseenter", displayCatIcons);
    };

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
    console.log(hub())
    const dueDate = hub()[category].due;
    catDue.textContent = dueDate !== "N/A" && dueDate ? `(Due: ${dueDate})`: "";
    catDisplayContainer.appendChild(catDue);

    //Append edit button
    if (category !== "General" && category !== "Trash") {
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
        catDeleteButton.addEventListener("click", deleteCat);

        //Append delete icon
        const catDeleteIcon = document.createElement("img");
        catDeleteIcon.className = "delete-icon";
        catDeleteIcon.alt = "Icon of delete buttom";
        catDeleteIcon.src = binIcon;
        catDeleteIcon.dataset.category = category;
        catDeleteButton.appendChild(catDeleteIcon);
    };

    for (let toDoObj in hub()[category].toDo) {
        const toDoDisplayContainer = document.createElement("div");
        toDoDisplayContainer.className = "todo-item";
        toDoDisplayContainer.dataset.title = toDoObj;
        toDoDisplayContainer.dataset.category = category;
        todoItemContainer.appendChild(toDoDisplayContainer);
        toDoDisplayContainer.addEventListener("mouseenter", displayToDoIcons);

        //Append checkbox
        const checkbox = document.createElement("button");
        checkbox.className = "checkbox";
        checkbox.type = "checkbox-button";
        checkbox.setAttribute("aria-pressed", "false");
        checkbox.dataset.title = toDoObj;
        checkbox.dataset.category = category;
        toDoDisplayContainer.appendChild(checkbox);
        checkbox.addEventListener("click", toggleComplete);

        //Append toDo header
        const toDoHeader = document.createElement("p");
        toDoHeader.className = "todo-display-header";
        toDoHeader.textContent = toDoObj;
        toDoHeader.dataset.title = toDoObj;
        toDoHeader.dataset.category = category;
        toDoDisplayContainer.appendChild(toDoHeader);

        //Append due
        const toDoDue = document.createElement("p");
        toDoDue.className = "todo-due";
        const toDoDueDate = hub()[category].toDo[toDoObj].due
        toDoDue.textContent = toDoDueDate !== "N/A" ? `(Due: ${toDoDueDate})`: "";
        toDoDue.dataset.title = toDoObj;
        toDoDue.dataset.category = category;
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
        toDoDeleteButton.addEventListener("click", deleteToDo);

        //Append delete icon
        const toDoDeleteIcon = document.createElement("img");
        toDoDeleteIcon.className = "delete-icon";
        toDoDeleteIcon.alt = "Icon of delete buttom";
        toDoDeleteIcon.src = binIcon;
        toDoDeleteIcon.dataset.title = toDoObj;
        toDoDeleteIcon.dataset.category = category;
        toDoDeleteButton.appendChild(toDoDeleteIcon);
    };
    //Append add todo button
    if (category !== "Trash") {
        const todoButtonContainer = document.createElement("div");
        todoButtonContainer.className = "todo-button-container";
        todoButtonContainer.dataset.category = category;
        toDoDisplay.appendChild(todoButtonContainer);

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
    };
};

export function attachCatButtonListeners() {
    const showAllButton = document.getElementById("show-all-button");
    showAllButton.addEventListener("click", displayHub);
    const generalCatButton = document.getElementById("general-cat-button");
    generalCatButton.addEventListener("click", showThisCat);
    for (let category in hub()) {
        if (category !== "General") {
            const button = document.querySelector(`.cat-button[data-category="${category}"]`);
            button.addEventListener("click", showThisCat);
        };
    };
};
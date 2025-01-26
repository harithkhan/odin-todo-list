import { getData } from "../logic/todo-hub";
import editIconPath from "../img/edit.png";
import submitIconPath from "../img/checked.png";
import closeIconPath from "../img/close.png";
import { rename, assign, description, due, priority, notes } from "../logic/todo-functions";
import { parseISO, format } from "date-fns";

export function handleEditToDoClick(event) {

    const editButton = event.target.closest(".todo-edit-button");
    const title = editButton.dataset.title;
    const toDoContainer = document.querySelector(`.todo-item[data-title="${title}"]`);
    editButton.removeEventListener("click", handleEditToDoClick);
    editButton.remove();  

    //Add close button with icon
    const closeButton = document.createElement("button");
    closeButton.className = "todo-close-button";
    closeButton.dataset.title = title;
    closeButton.type = "button";
    const closeIcon = document.createElement("img");
    closeIcon.alt = "Icon of close button";
    closeIcon.className = "close-icon";
    closeIcon.src = closeIconPath;
    closeIcon.dataset.title = title;
    closeButton.appendChild(closeIcon);

    const toDoDeleteButton = document.querySelector(`.todo-delete-button[data-title="${title}"]`);
    toDoDeleteButton.insertAdjacentElement("beforebegin", closeButton);
    closeButton.addEventListener("click", handleCloseClick);

    //Append a new form
    const editToDoForm = document.createElement("form");
    const formCategory = event.target.dataset.category;

    editToDoForm.autocomplete = "off";
    editToDoForm.className = "edit-todo-form";
    editToDoForm.dataset.title = title;
    editToDoForm.dataset.formCategory;
    toDoContainer.insertAdjacentElement("afterend", editToDoForm);
    editToDoForm.addEventListener("submit", toDoEditSubmit);

    //Append title input
    const editToDoTitle = document.createElement("input");
    editToDoTitle.type = "text";
    editToDoTitle.name = "edit-todo-title";
    editToDoTitle.id = "edit-todo-title";
    editToDoTitle.value = title;
    editToDoForm.appendChild(editToDoTitle);
    editToDoTitle.focus();

    //Append due input
    const editToDoDue = document.createElement("input");
    editToDoDue.type = "datetime-local";
    editToDoDue.name = "edit-todo-due";
    editToDoDue.id = "edit-todo-due";
    editToDoDue.value = "-";
    editToDoForm.appendChild(editToDoDue);

    //Append description input
    const editToDoDescription = document.createElement("input");
    editToDoDescription.type = "text";
    editToDoDescription.name = "edit-todo-description";
    editToDoDescription.id = "edit-todo-description";
    editToDoDescription.value = getData()[formCategory].description === "N/A" ? null : getData()[formCategory].description;
    editToDoDescription.placeholder = "Description";
    editToDoForm.appendChild(editToDoDescription);

    //Append assign input
    const editToDoCategory = document.createElement("select");
    editToDoCategory.id = "edit-todo-cat";
    editToDoCategory.name = "edit-todo-cat";
    editToDoCategory.value = formCategory;
    for (let category in getData()) {
        const selectOption = document.createElement("option");
        selectOption.value = category;
        selectOption.textContent = category;
        editToDoCategory.appendChild(selectOption);
    };
    editToDoForm.appendChild(editToDoCategory);

    //Append priority input
    const editPriority = document.createElement("select");
    editPriority.id = "edit-priority";
    editPriority.name = "edit-priority";
    editPriority.value = getData()[formCategory].toDo[title].priority;

    const priorityNull = document.createElement("option");
    priorityNull.className = "priority-null"
    priorityNull.value = "-";
    priorityNull.textContent = "-";
    editPriority.appendChild(priorityNull);

    const priorityLow = document.createElement("option");
    priorityLow.className = "priority-low";
    priorityLow.value = "Low";
    priorityLow.textContent = "Low";
    editPriority.appendChild(priorityLow);

    const priorityMedium = document.createElement("option");
    priorityMedium.className = "priority-Medium";
    priorityMedium.value = "Medium";
    priorityMedium.textContent = "Medium";
    editPriority.appendChild(priorityMedium);

    const priorityHigh = document.createElement("option");
    priorityHigh.className = "priority-High";
    priorityHigh.value = "High";
    priorityHigh.textContent = "High";
    editPriority.appendChild(priorityHigh);
    editToDoForm.appendChild(editPriority);

    //Append notes input
};

function handleCloseClick(event) {
    const closeButton = event.target.closest(".todo-close-button");
    const title = closeButton.dataset.title;
    const toDoContainer = document.querySelector(`.todo-item[data-title="${title}"]`);
    const editToDoForm = document.querySelector(`.edit-todo-form[data-title="${title}"]`);
    editToDoForm.remove();
    closeButton.remove();

    const toDoEditButton = document.createElement("button");
    toDoEditButton.className = "todo-edit-button";
    toDoEditButton.type = "button";
    toDoEditButton.dataset.title = title;

    const toDoEditIcon = document.createElement("img");
    toDoEditIcon.alt = "Icon of edit button";
    toDoEditIcon.className = "edit-icon";
    toDoEditIcon.src = editIconPath;
    toDoEditIcon.dataset.title = title;
    toDoEditButton.appendChild(toDoEditIcon);

    toDoEditButton.addEventListener("click", handleEditToDoClick);
    const toDoDeleteButton = document.querySelector(`.todo-delete-button[data-title="${title}"]`);
    toDoDeleteButton.insertAdjacentElement("beforebegin", toDoEditButton);
};

function toDoEditSubmit() {

}
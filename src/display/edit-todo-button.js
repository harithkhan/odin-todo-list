import { getData } from "../logic/todo-hub";
import editIconPath from "../img/edit.png";
import submitIconPath from "../img/checked.png";
import closeIconPath from "../img/close.png";
import { rename, assign, description, due, priority, notes } from "../logic/todo-functions";
import { parseISO, format } from "date-fns";
import { displayToDoIcons } from "./icon-hover";

export function handleEditToDoClick(event) {

    const editButton = event.target.closest(".todo-edit-button");
    const title = editButton.dataset.title;
    const category = event.target.dataset.category;
    const toDoContainer = document.querySelector(`.todo-item[data-title="${title}"]`);
    editButton.removeEventListener("click", handleEditToDoClick);
    editButton.remove();  

    //Add close button with icon
    const closeButton = document.createElement("button");
    closeButton.className = "todo-close-button";
    closeButton.dataset.title = title;
    closeButton.dataset.category = category;
    closeButton.type = "button";
    const closeIcon = document.createElement("img");
    closeIcon.alt = "Icon of close button";
    closeIcon.className = "close-icon";
    closeIcon.src = closeIconPath;
    closeIcon.dataset.title = title;
    closeIcon.dataset.category = category;
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
    editToDoForm.dataset.category = formCategory;
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
    editToDoDue.value = getData()[category].toDo[title].due;
    editToDoForm.appendChild(editToDoDue);

    //Append description input
    const editToDoDescription = document.createElement("input");
    editToDoDescription.type = "text";
    editToDoDescription.name = "edit-todo-description";
    editToDoDescription.id = "edit-todo-description";
    const currentDescription = getData()[formCategory].toDo[title].description;
    const descriptionDisplay = currentDescription === "N/A" ? "": currentDescription;
    editToDoDescription.value = descriptionDisplay;
    editToDoDescription.placeholder = "Description";
    editToDoForm.appendChild(editToDoDescription);

    //Append assign input
    const editToDoCategory = document.createElement("select");
    editToDoCategory.id = "edit-todo-cat";
    editToDoCategory.name = "edit-todo-cat";
    const catPlaceholder = document.createElement("option");
    catPlaceholder.disabled = true;
    catPlaceholder.className = "cat-placeholder";
    catPlaceholder.textContent = "Category"
    catPlaceholder.value = "";
    editToDoCategory.appendChild(catPlaceholder);

    for (let category in getData()) {
        if (category !== "Trash") {
            const selectOption = document.createElement("option");
            selectOption.value = category;
            selectOption.textContent = category;
            editToDoCategory.appendChild(selectOption);
            if (formCategory === category) selectOption.selected = true;
        };
    };
    editToDoForm.appendChild(editToDoCategory);

    //Append priority input
    const editPriority = document.createElement("select");
    editPriority.id = "edit-priority";
    editPriority.name = "edit-priority";
    const currentPriority = getData()[formCategory].toDo[title].priority;
    const priorityDisplay = currentPriority === "-" ? "": currentPriority;
    editPriority.value = priorityDisplay;

    const priorityPlaceholder = document.createElement("option");
    priorityPlaceholder.classname = "priority-placeholder";
    priorityPlaceholder.value = "";
    priorityPlaceholder.textContent = "Priority";
    priorityPlaceholder.disabled = true;
    editPriority.appendChild(priorityPlaceholder);

    const priorityNull = document.createElement("option");
    priorityNull.className = "priority-null"
    priorityNull.value = "-";
    priorityNull.textContent = "-";
    if (priorityDisplay === "-") {
        priorityNull.selected = true;
    };
    editPriority.appendChild(priorityNull);

    const priorityLow = document.createElement("option");
    priorityLow.className = "priority-low";
    priorityLow.value = "Low";
    priorityLow.textContent = "Low";
    if (priorityDisplay === "Low") {
        priorityLow.selected = true;
    };
    editPriority.appendChild(priorityLow);

    const priorityMedium = document.createElement("option");
    priorityMedium.className = "priority-Medium";
    priorityMedium.value = "Medium";
    priorityMedium.textContent = "Medium";
    if (priorityDisplay === "Medium") {
        priorityMedium.selected = true;
    };
    editPriority.appendChild(priorityMedium);

    const priorityHigh = document.createElement("option");
    priorityHigh.className = "priority-High";
    priorityHigh.value = "High";
    priorityHigh.textContent = "High";
    if (priorityDisplay === "High") {
        priorityHigh.selected = true;
    };
    editPriority.appendChild(priorityHigh);
    editToDoForm.appendChild(editPriority);

    //Append notes input
    const notes = document.createElement("input");
    notes.type = "text";
    notes.id = "notes";
    notes.name = "notes";
    const currentNotes = getData()[formCategory].toDo[title].notes;
    const notesDisplay = currentNotes === "N/A" ? "": currentNotes;
    notes.value = notesDisplay;
    notes.placeholder = "Notes";
    editToDoForm.appendChild(notes);

    //Append whenCreated disabled input
    const whenCreated = document.createElement("input");
    whenCreated.type = "text";
    whenCreated.id = "when-created";
    whenCreated.name = "when-created";
    const whenCreatedData = getData()[formCategory].toDo[title].whenCreated;
    whenCreated.value = `Created: ${whenCreatedData}`;
    whenCreated.disabled = "true";
    editToDoForm.appendChild(whenCreated);

    //Append Submit button
    const submitButton = document.createElement("button");
    submitButton.className = "todo-submit-button";
    submitButton.dataset.category = category;
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    editToDoForm.appendChild(submitButton);
};

function handleCloseClick(event) {
    const closeButton = event.target.closest(".todo-close-button");
    const title = closeButton.dataset.title;
    const category = event.target.dataset.category;
    const editToDoForm = document.querySelector(`.edit-todo-form[data-title="${title}"]`);
    editToDoForm.remove();
    closeButton.remove();

    const toDoEditButton = document.createElement("button");
    toDoEditButton.className = "todo-edit-button";
    toDoEditButton.type = "button";
    toDoEditButton.dataset.title = title;
    toDoEditButton.dataset.category = category;

    const toDoEditIcon = document.createElement("img");
    toDoEditIcon.alt = "Icon of edit button";
    toDoEditIcon.className = "edit-icon";
    toDoEditIcon.src = editIconPath;
    toDoEditIcon.dataset.title = title;
    toDoEditIcon.dataset.category = category;
    toDoEditButton.appendChild(toDoEditIcon);

    const toDoDeleteButton = document.querySelector(`.todo-delete-button[data-title="${title}"]`);
    toDoDeleteButton.insertAdjacentElement("beforebegin", toDoEditButton);
    toDoEditButton.addEventListener("click", handleEditToDoClick);

    //Reattach previous event listeners
    const toDoContainer = document.querySelector(`.todo-item[data-title="${title}"]`);
    toDoContainer.addEventListener("mouseenter", displayToDoIcons);
};

function toDoEditSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    //Submit Title
    const oldTitle = event.target.dataset.title;
    const formTitle = formData.get("edit-todo-title");
    rename(oldTitle, formTitle);
    
    //Submit Due
    const formDue = formData.get("edit-todo-due");
    const formDueValidated = !formDue ? "N/A": formDue;
    const dateObj = formDueValidated === "N/A" ? "N/A": parseISO(formDue); 
    const formDueFormatted = dateObj === "N/A" ? "N/A" : format(dateObj, "h:mma, dd/MM/yyyy");
    const currentKey = formTitle !== oldTitle ? formTitle : oldTitle;
    if (formDue) {
        due(currentKey, formDueFormatted);
      };

    //Submit Description
    const formDescription = formData.get("edit-todo-description");
    description(currentKey, formDescription);

    //Submit Category
    const oldFormCategory = event.target.dataset.category;
    const newFormCategory = formData.get("edit-todo-cat");
    if (oldFormCategory !== newFormCategory) {
        assign(currentKey, newFormCategory);
    };
    
    //Submit Priority
    const formPriority = formData.get("edit-priority");
    priority(currentKey, formPriority);
    
    //Submit Notes
    const formNotes = formData.get("notes");
    notes(currentKey, formNotes);
    form.remove();

    //Update display data
    const newToDoItem = document.querySelector(`.todo-item[data-title="${oldTitle}"`);
    newToDoItem.dataset.title = currentKey;

    const newToDoDisplay = document.querySelector(`.todo-display-header[data-title="${oldTitle}"]`);
    newToDoDisplay.dataset.title = currentKey;
    newToDoDisplay.textContent = currentKey;

    const newToDoDue = document.querySelector(`.todo-due[data-title="${oldTitle}"]`);
    newToDoDue.dataset.title = currentKey;
    const getNewFormDueDisplay = function() {
        if (formDue) {
          return `(Due: ${formDueFormatted})`
        } else if (!formDue) {
          if (getData()[newFormCategory]?.toDo?.[currentKey].due === "N/A") {
            return "";
          } else return `(Due: ${getData()[newFormCategory]?.toDo?.[currentKey].due})`;
        };
      };
    newToDoDue.textContent = getNewFormDueDisplay();

    if (oldFormCategory !== newFormCategory) {
        const currentToDoContainer = document.querySelector(`.todo-item[data-title="${currentKey}"]`);
        currentToDoContainer.remove();
        const targetCategory = document.querySelector(`.todo-item[data-category="${newFormCategory}"]`);   
        targetCategory.insertAdjacentElement("afterend", currentToDoContainer);
        currentToDoContainer.dataset.category = newFormCategory;
    };

    //Place Edit button back
    const closeButton = document.querySelector(`.todo-close-button[data-title="${oldTitle}"]`);
    closeButton.remove();

    const title = currentKey;
    const toDoEditButton = document.createElement("button");
    toDoEditButton.className = "todo-edit-button";
    toDoEditButton.type = "button";
    toDoEditButton.dataset.title = title;
    toDoEditButton.dataset.category = newFormCategory;

    const toDoEditIcon = document.createElement("img");
    toDoEditIcon.alt = "Icon of edit button";
    toDoEditIcon.className = "edit-icon";
    toDoEditIcon.src = editIconPath;
    toDoEditIcon.dataset.title = title;
    toDoEditIcon.dataset.category = newFormCategory;
    toDoEditButton.appendChild(toDoEditIcon);

    const toDoDeleteButton = document.querySelector(`.todo-delete-button[data-title="${oldTitle}"]`);
    toDoDeleteButton.dataset.title = title;
    toDoDeleteButton.dataset.category = newFormCategory;
    toDoDeleteButton.insertAdjacentElement("beforebegin", toDoEditButton);
    toDoEditButton.addEventListener("click", handleEditToDoClick);

    //Reattach previous event listeners
    const toDoContainer = document.querySelector(`.todo-item[data-title="${title}"]`);
    toDoContainer.addEventListener("mouseenter", displayToDoIcons);
};
import { getData } from "../logic/todo-hub";
import editIconPath from "../img/edit.png";
import submitIconPath from "../img/checked.png";
import closeIconPath from "../img/close.png";
import { rename, description, due } from "../logic/category-functions";
import { parseISO, format } from "date-fns";
import { displayCatIcons } from "./icon-hover";

export const handleEditCatClick = function(event) {

    const editButton = event.target.closest(".cat-edit-button");
    const category = editButton.dataset.category;
    const catContainer = document.querySelector(`.todo-item[data-category="${category}"]`);
    //Remove edit button event listener temporarily
    editButton.removeEventListener("click", handleEditCatClick);
    editButton.remove();

    //Add close button with icon
    const closeButton = document.createElement("button");
    closeButton.className = "cat-close-button";
    closeButton.dataset.category = category;
    closeButton.type = "button";
    const closeIcon = document.createElement("img");
    closeIcon.alt = "Icon of close button";
    closeIcon.className = "close-icon";
    closeIcon.src = closeIconPath;
    closeIcon.dataset.category = category;
    closeButton.appendChild(closeIcon);

    const catDeleteButton = document.querySelector(`.cat-delete-button[data-category="${category}"]`);
    catDeleteButton.insertAdjacentElement("beforebegin", closeButton);
    closeButton.addEventListener("click", handleCloseClick);

    //Append a new form
    const editCatForm = document.createElement("form");
    editCatForm.autocomplete = "off";
    editCatForm.className = "edit-cat-form";
    editCatForm.dataset.category = category;
    catContainer.insertAdjacentElement("afterend", editCatForm);
    editCatForm.addEventListener("submit", catEditSubmit);

    //Append title input
    const editCatTitle = document.createElement("input");
    editCatTitle.type = "text";
    editCatTitle.name = "edit-cat-title";
    editCatTitle.id = "edit-cat-title";
    editCatTitle.value = category;
    editCatForm.appendChild(editCatTitle);
    editCatTitle.focus();

    //Append due input
    const editCatDue = document.createElement("input");
    editCatDue.type = "datetime-local";
    editCatDue.name = "edit-cat-due";
    editCatDue.id = "edit-cat-due";
    editCatDue.value = getData()[category].due;
    editCatForm.appendChild(editCatDue);

    //Append description input
    const editCatDescription = document.createElement("input");
    editCatDescription.type = "text";
    editCatDescription.name = "edit-cat-description";
    editCatDescription.id = "edit-cat-description";
    editCatDescription.value = getData()[category].description === "N/A" ? null : getData()[category].description;
    editCatDescription.placeholder = "Description";
    editCatForm.appendChild(editCatDescription);

    //Add submit button to form with icon
    const submitButton = document.createElement("button");
    submitButton.className = "cat-submit-button";
    submitButton.dataset.category = category;
    submitButton.type = "submit";
    const submitIcon = document.createElement("img");
    submitIcon.alt = "Icon of submit button";
    submitIcon.className = "submit-icon"
    submitIcon.src = submitIconPath;
    submitIcon.dataset.category = category;
    submitButton.appendChild(submitIcon);
    editCatForm.appendChild(submitButton);
};

function handleCloseClick(event) {
    const closeButton = event.target.closest(".cat-close-button");
    const category = closeButton.dataset.category;
    
    const editCatForm = document.querySelector(`.edit-cat-form[data-category="${category}"]`);
    editCatForm.remove();
    closeButton.remove();

    const catEditButton = document.createElement("button");
    catEditButton.className = "cat-edit-button";
    catEditButton.type = "button";
    catEditButton.dataset.category = category;

    const catEditIcon = document.createElement("img");
    catEditIcon.alt = "Icon of edit button";
    catEditIcon.className = "edit-icon";
    catEditIcon.src = editIconPath;
    catEditIcon.dataset.category = category;
    catEditButton.appendChild(catEditIcon);

    catEditButton.addEventListener("click", handleEditCatClick);
    const catDeleteButton = document.querySelector(`.cat-delete-button[data-category="${category}"]`);
    catDeleteButton.insertAdjacentElement("beforebegin", catEditButton);
    //Reattach previous event listeners
    const catContainer = document.querySelector(`.todo-item[data-category="${category}"]`);
    catContainer.addEventListener("mouseenter", displayCatIcons);
};

function catEditSubmit(event) {
    event.preventDefault();

    //Get new data
    const form = event.target;
    const formData = new FormData(form);
    const formTitle = formData.get("edit-cat-title");

    const formDue = formData.get("edit-cat-due");
    const formDueValidated = !formDue ? "N/A": formDue;
    const dateObj = formDueValidated === "N/A" ? "N/A": parseISO(formDue); 
    const formDueFormatted = dateObj === "N/A" ? "N/A" : format(dateObj, "h:mma, dd/MM/yyyy");
    const formDescription = formData.get("edit-cat-description");

    //Update App Data
    const oldTitle = event.target.dataset.category;

    if (formTitle !== oldTitle) {
        rename(oldTitle, formTitle);
      };
    rename(oldTitle, formTitle);

    const currentKey = formTitle !== oldTitle ? formTitle : oldTitle;
    if (!formDue) {
      due(currentKey, "N/A");
    } else {
      due(currentKey, formDueFormatted);
    };

    description(currentKey, formDescription);

    form.remove();

    //Updade display data
    const newToDoItem = document.querySelector(`.todo-item[data-category="${oldTitle}"`);
    newToDoItem.dataset.category = currentKey;

    const newCatDisplay = document.querySelector(`.cat-display[data-category="${oldTitle}"]`);
    newCatDisplay.dataset.category = currentKey;
    newCatDisplay.textContent = currentKey;

    const newCatDue = document.querySelector(`.cat-due[data-category="${oldTitle}"]`);
    newCatDue.dataset.category = currentKey;
    const newFormDueDisplay = formDueValidated !== "N/A" ? `(Due: ${formDueFormatted})`: "";
    newCatDue.textContent = newFormDueDisplay;

    //Place Edit button back
    const closeButton = document.querySelector(`.cat-close-button[data-category="${oldTitle}"]`);
    closeButton.remove();

    const category = currentKey;
    const catEditButton = document.createElement("button");
    catEditButton.className = "cat-edit-button";
    catEditButton.type = "button";
    catEditButton.dataset.category = category;

    const catEditIcon = document.createElement("img");
    catEditIcon.alt = "Icon of edit button";
    catEditIcon.className = "edit-icon";
    catEditIcon.src = editIconPath;
    catEditIcon.dataset.category = category;
    catEditButton.appendChild(catEditIcon);

    const catDeleteButton = document.querySelector(`.cat-delete-button[data-category="${oldTitle}"]`);
    catDeleteButton.dataset.category = category;
    catDeleteButton.insertAdjacentElement("beforebegin", catEditButton);
    catEditButton.addEventListener("click", handleEditCatClick);

    //Reattach previous event listeners
    const catContainer = document.querySelector(`.todo-item[data-category="${category}"]`);
    catContainer.addEventListener("mouseenter", displayCatIcons);
};
export function displayCatIcons(event) {
    const category = event.target.dataset.category;
    const catContainer = document.querySelector(`.todo-item[data-category="${category}"]`);
    const editButton = document.querySelector(`.cat-edit-button[data-category="${category}"]`);
    if (editButton) { editButton.classList.remove("hidden") };
    const deleteButton = document.querySelector(`.cat-delete-button[data-category="${category}"]`);
    deleteButton.classList.remove("hidden");
    catContainer.removeEventListener("mouseenter", displayCatIcons);
    catContainer.addEventListener("mouseleave", removeCatIcons);
    catContainer.addEventListener("click", (event) => {
        if (event.target.closest(`.cat-edit-button[data-category="${category}"]`) === editButton 
        || event.target.closest(`.cat-delete-button[data-category="${category}"]`) === deleteButton
        ) {
            catContainer.removeEventListener("mouseleave", removeCatIcons);
        };
    });
};

export function removeCatIcons(event) {
    const category = event.target.dataset.category;
    const catContainer = document.querySelector(`.todo-item[data-category="${category}"]`);
    const editButton = document.querySelector(`.cat-edit-button[data-category="${category}"]`);
    editButton.classList.add("hidden");
    const deleteButton = document.querySelector(`.cat-delete-button[data-category="${category}"]`);
    deleteButton.classList.add("hidden");
    catContainer.removeEventListener("mouseleave", removeCatIcons);
    catContainer.addEventListener("mouseenter", displayCatIcons);
};

export function displayToDoIcons(event) {
    const title = event.target.dataset.title;
    const toDoContainer = document.querySelector(`.todo-item[data-title="${title}"]`);
    const editButton = document.querySelector(`.todo-edit-button[data-title="${title}"]`);
    if (editButton) {
        editButton.classList.remove("hidden");
    };
    const deleteButton = document.querySelector(`.todo-delete-button[data-title="${title}"]`);
    deleteButton.classList.remove("hidden");
    toDoContainer.removeEventListener("mouseenter", displayToDoIcons);
    toDoContainer.addEventListener("mouseleave", removeToDoIcons);
    toDoContainer.addEventListener("click", (event) => {
        if (event.target.closest(`.todo-edit-button[data-title="${title}"]`) === editButton 
        || event.target.closest(`.todo-delete-button[data-title="${title}"]`) === deleteButton
        ) {
            toDoContainer.removeEventListener("mouseleave", removeToDoIcons);
        };
    });
};

export function removeToDoIcons(event) {
    const title = event.target.dataset.title;
    const toDoContainer = document.querySelector(`.todo-item[data-title="${title}"]`);
    const editButton = document.querySelector(`.todo-edit-button[data-title="${title}"]`);
    if (editButton) {
        editButton.classList.add("hidden");
    };
    const deleteButton = document.querySelector(`.todo-delete-button[data-title="${title}"]`);
    deleteButton.classList.add("hidden");
    toDoContainer.removeEventListener("mouseleave", removeToDoIcons);
    toDoContainer.addEventListener("mouseenter", displayToDoIcons);
};
export function displayCatIcons(event) {
    const category = event.target.dataset.category;
    const catContainer = document.querySelector(`.todo-item[data-category="${category}"]`);
    const editButton = document.querySelector(`.cat-edit-button[data-category="${category}"]`);
    editButton.classList.remove("hidden");
    const deleteButton = document.querySelector(`.cat-delete-button[data-category="${category}"]`);
    deleteButton.classList.remove("hidden");
    catContainer.removeEventListener("mouseenter", displayCatIcons);
    catContainer.addEventListener("mouseleave", removeCatIcons);
    catContainer.addEventListener("click", (event) => {
        if (event.target.closest(`.cat-edit-button[data-category="${category}"]`) === editButton 
        || event.target.closest(`.cat-delete-button[data-category="${category}"]`) === deleteButton
        ) {
            catContainer.removeEventListener("mouseleave", removeCatIcons);
            console.log("ping");
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
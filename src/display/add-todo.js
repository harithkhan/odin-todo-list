export function handleAddToDoClick(event) {
    const toDoButtonContainer = document.querySelectorAll(".todo-button-container");
    const addToDoContainer = document.querySelectorAll(".todo-add-todo");
    const addToDoBtn = document.querySelectorAll(".add-todo");

    for (let element of addToDoContainer) {
        console.log(element)
        if (element.dataset.category === event.target.dataset.category) {
            element.remove();
        };
    };

    for (let element of toDoButtonContainer) {
        if (element.dataset.category === event.target.dataset.category) {

            const toDoForm = document.createElement("form");
            toDoForm.autocomplete = "off";
            toDoForm.className = "todo-form";
            element.prepend(toDoForm);

            const newToDoTitle = document.createElement("input");
            newToDoTitle.className = "todo-form-title";
            newToDoTitle.type = "text";
            newToDoTitle.id = "todo-form-title";
            newToDoTitle.name = "todo-form-title";
            newToDoTitle.placeholder = "Title";
            toDoForm.appendChild(newToDoTitle);
            newToDoTitle.focus();
        };
    };



    // const toDoTitle = document.createElement("input");
    // toDoTitle.className = "todo-form-title";
    // toDoTitle.type = "text";
    // toDoTitle.id = "todo-form-title";
    // toDoTitle.name = "todo-form-title";
    // toDoTitle.placeholder = "Title";
    // toDoForm.appendChild(toDoTitle);
};
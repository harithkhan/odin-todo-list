import { getData } from "../logic/todo-hub";

export function deleteCat(event) {
    const category = event.target.dataset.category;    
    const catContainer = document.querySelector(`.todo-item-container[data-category="${category}"]`);
    catContainer.remove();  
    const addButtonsContainer = document.querySelector(`.todo-button-container[data-category="${category}"]`);
    addButtonsContainer.remove();

};

export function deleteToDo(event) {

};
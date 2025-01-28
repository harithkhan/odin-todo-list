import { ca } from "date-fns/locale";
import { moveToTrash as moveCatToTrash} from "../logic/category-functions";
import { moveToTrash as moveToDoToTrash } from "../logic/todo-functions";
import { buildAllCats } from "./cat-display";
import { toDoHub as hub } from "../logic/todo-hub";

export function deleteCat(event) {
    const category = event.target.dataset.category;    
    const catContainer = document.querySelector(`.todo-item-container[data-category="${category}"]`);
    catContainer.remove();  
    const addButtonsContainer = document.querySelector(`.todo-button-container[data-category="${category}"]`);
    addButtonsContainer.remove();
    moveCatToTrash(event);
    buildAllCats();
};

export function deleteToDo(event) {
    const category = event.target.dataset.category;
    const title = event.target.dataset.title;
    const toDoContainer = document.querySelector(`.todo-item[data-title="${title}"]`);
    toDoContainer.remove();
    moveToDoToTrash(event);
};

export function permanentCatDelete(event) {
    const category = event.target.dataset.category;
    delete hub.Trash[category];
    const removeFromDom = document.querySelectorAll(`.todo-item[data-category="${category}"]`);
    removeFromDom.forEach((element) => {
        element.remove();
    });
};
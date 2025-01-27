import { ca } from "date-fns/locale";
import { getData } from "../logic/todo-hub";

export function deleteCat(event) {
    const category = event.target.dataset.category;    
    const catContainer = document.querySelector(`.todo-item-container[data-category="${category}"]`);
    catContainer.remove();  
    const addButtonsContainer = document.querySelector(`.todo-button-container[data-category="${category}"]`);
    addButtonsContainer.remove();
    getData().Trash[category] = getData()[category];
    delete getData()[category];
    console.log(getData());
};

export function deleteToDo(event) {
    const category = event.target.dataset.category;
    const title = event.target.dataset.title;
    const toDoContainer = document.querySelector(`.todo-item[data-title="${title}"]`);
    toDoContainer.remove();
    const data = getData();
    if (!data.Trash[category]) {
        data.Trash[category] = { toDo: {} };
    };
    data.Trash[category].toDo[title] = data[category].toDo[title];
    delete data[category].toDo[title];
    console.log(getData())
};
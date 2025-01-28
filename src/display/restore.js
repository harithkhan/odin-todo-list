import { restore as restoreCat } from "../logic/category-functions";
import { restore as restoreToDo } from "../logic/todo-functions";
import { getData } from "../logic/todo-hub";

export function handleRestoreCatClick(event) {
    const restoreButton = event.target.closest(".cat-restore-button");
    const category = event.target.dataset.category;
    restoreCat(category);
    const toRestore = document.querySelectorAll(`.todo-item[data-category="${category}"]`);
    toRestore.forEach((element) => {
        element.remove();
    });
};

export function handleRestoreToDoClick(event) {
    const title = event.target.dataset.title;
    const category = event.target.dataset.category;
    restoreToDo(title);
    const toRestore = document.querySelectorAll(`.todo-item[data-title="${title}"]`);
    toRestore.forEach((element) => {
        element.remove();
    });
    const testObj = getData().Trash[category].toDo;
    if (Object.keys(testObj).length === 0) {
        delete getData().Trash[category];
        const categoryHeader = document.querySelector(`.todo-item[data-category="${category}"]`);
        categoryHeader.remove();
    };
};
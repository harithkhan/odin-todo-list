import { restore as restoreCat } from "../logic/category-functions";
import { restore as restoreToDo } from "../logic/todo-functions";

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
    restoreToDo(title);
    const toRestore = document.querySelectorAll(`.todo-item[data-title="${title}"]`);
    toRestore.forEach((element) => {
        element.remove();
    });
};
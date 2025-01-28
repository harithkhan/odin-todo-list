import { restore as restoreCat } from "../logic/category-functions";

export function handleRestoreCatClick(event) {
    const restoreButton = event.target.closest(".cat-restore-button");
    const category = event.target.dataset.category;
    restoreCat(category);
    const toRestore = document.querySelectorAll(`.todo-item[data-category="${category}"]`);
    toRestore.forEach((element) => {
        element.remove();
    });
};
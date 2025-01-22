import { categoryObj } from "./category-obj";

export class Category {
    constructor(title, description) {
        this._title = title;
        this._description = description;
        this._toDo= {};
    };
    get title() {
        return this._title;
    };
    get description() {
        return this._description;
    };
    get toDo() {
        return this._toDo;
    };
    set title(newTitle) {
        const oldTitle = this._title;
        this._title = newTitle;
        categoryObj.refreshCategoryKey(oldTitle, newTitle);
    };
    set description(newDescription) {
        this._description = newDescription;
    };
};

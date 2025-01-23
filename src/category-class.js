export class Category {
    constructor(title, description = "N/A", due = "N/A") {
        this._title = title;
        this._description = description;
        this._due = due;
        this._toDo= {};
    };
    get title() {
        return this._title;
    };
    get description() {
        return this._description;
    };
    get due() {
        return this._due;
    };
    get toDo() {
        return this._toDo;
    };
    set title(newTitle) {
        this._title = newTitle;
    };
    set description(newDescription) {
        this._description = newDescription;
    };
    set due(newDue) {
        this._due = newDue;
    };
    set toDo(newToDo) {
        this._toDo = newToDo;
    };
};

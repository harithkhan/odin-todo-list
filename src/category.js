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
    }
};

//Initialize Category Object
export let categoryObj = {};
categoryObj["General"] = new Category("General", "General/default category.");


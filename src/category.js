export class Category {
    constructor(title, description) {
        this._title = title;
        this._description = description;
    };
    get title() {
        return this._title;
    };
    get description() {
        return this._description;
    };
};

//Initialize Category Object
export let categoryObj = {};
categoryObj["General"] = new Category("General", "General/default category.");


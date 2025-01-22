export default class Category {
    constructor(title, description) {
        this._title = title;
        this._description = description;
    };
    get title() {
        return this._title;
    };
};
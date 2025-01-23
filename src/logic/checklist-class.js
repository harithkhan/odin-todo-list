export default class Checklist {
    constructor(item = "N/A", isComplete = false) {
        this._item = item;
        this._isComplete = isComplete;
    };
    get item() {
        return this._item;
    };
    set item(newitem) {
        this._item = newitem;
    };
    get isComplete() {
        return this._isComplete;
    };
    set isComplete(newStatus) {
        this._isComplete = newStatus;
    };
};
export class Checklist {
    constructor(description = "N/A", isComplete = false) {
        this._description = description;
        this._isComplete = isComplete;
    };
    get description() {
        return this._description;
    };
    set description(newDescription) {
        this._description = newDescription;
    };
    get isComplete() {
        return this._isComplete;
    };
    set isComplete(newStatus) {
        this._isComplete = newStatus;
    };
};
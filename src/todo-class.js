import { format } from "date-fns";

export default class ToDo {
    constructor(
        title, 
        description = "N/A", 
        due = "N/A", 
        priority = 0, 
        notes = "N/A", 
        checklist = {},
        isComplete = false 
    ) {
        this._title = title;
        this._description = description;
        this._due = due;
        this._priority = priority;
        this._notes = notes;
        this._isComplete = isComplete;
        this._checklist = checklist;
        this._whenCreated = format(new Date(), "h:mma, EEEE, d MMM yyyy");
    };

    get title() {
        return this._title;
    };
    set title(newTitle) {
        this._title = newTitle;
    };

    get description() {
        return this._description;
    };
    set description(newDescription) {
        this._description = newDescription;
    };

    get due() {
        return this._due;
    };
    set due(newDue) {
        this._due = newDue;
    };

    get priority() {
        return this._priority;
    };
    set priority(newPriority) {
        this._priority = newPriority;
    };

    get notes() {
        return this._notes;
    };
    set notes(newNotes) {
        this._notes = newNotes;
    };

    get checklist() {
        return this._checklist;
    };
    set checklist(newChecklist) {
        this._checklist = newChecklist;
    };

    get isComplete() {
        return this._isComplete;
    };
    set isComplete(newStatus) {
        this._isComplete = newStatus;
    };

    get whenCreated() {
        return this._whenCreated;
    };
    set whenCreated(timeStamp) {
        this._whenCreated = timeStamp;
    };
};
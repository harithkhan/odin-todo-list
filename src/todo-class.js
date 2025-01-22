import { format } from "date-fns";

export default class ToDo {
    constructor(title, 
        description = "N/A", 
        duePeriod = "N/A", 
        priority, 
        notes = "N/A", 
        isComplete = false, 
    ) {
        this._title = title;
        this._description = description;
        this._duePeriod = duePeriod;
        this._priority = priority;
        this._notes = notes;
        this._isComplete = isComplete;
        this._whenCreated = format(new Date(), "h:mma, EEEE, d MMM yyyy");
    };
};
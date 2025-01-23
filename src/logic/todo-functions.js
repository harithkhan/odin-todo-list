import { toDoHub as hub } from "./todo-hub.js";
import ToDo from "./todo-class.js";
import { Category } from "./category-class.js";
import { ca } from "date-fns/locale";

//Exported functions that manipulate object toDoHub, but only related to class ToDo
const add = function(
    category,
    title, 
    description, 
    due, 
    priority, 
    notes, 
    isComplete
) {
    if (!category || category === "General") {
        hub.General.toDo[title] = new ToDo(
            title, 
            description, 
            due, 
            priority, 
            notes, 
            isComplete
        );
    } else if (hub.hasOwnProperty(category)) {
        hub[category].toDo[title] = new ToDo(
            title, 
            description, 
            due, 
            priority, 
            notes, 
            isComplete
        );
    } else if (!hub.hasOwnProperty(category)) {
        hub[category] = new Category(category); //Create a new category if the provided one doesn't exist
        hub[category].toDo[title] = new ToDo(
            title, 
            description, 
            due, 
            priority, 
            notes, 
            isComplete
        );
    };
};

const rename = function(oldTitle, newTitle) {
    for (let category in hub) {
        if (hub[category]._toDo[oldTitle]) { //Find the target obj in its category
            hub[category]._toDo[oldTitle].title = newTitle; //Change the title in the current obj to new name
            const oldObj = hub[category]._toDo[oldTitle];
            hub[category]._toDo[newTitle] = oldObj //Create a new obj with new title name
            delete hub[category]._toDo[oldTitle] //Delete old obj
        };
    };
};

const assign = function(target, newCategory) {
    for (let category in hub) {
        const toDoObj = hub[category]._toDo[target];
        if (toDoObj) { 
            hub[newCategory]._toDo[target] = toDoObj; //Assign toDo into new category
            delete hub[category]._toDo[target]; //Delete old toDo object from old category
        };
    };
}

const del = function(target) {
    for (let category in hub) {
        const toDoObj = hub[category]._toDo[target];
        if (toDoObj) { delete hub[category]._toDo[target] };
    };
};

const description = function(target, newDescription) {
    for (let category in hub) {
        const toDoObj = hub[category]._toDo[target];
        if (toDoObj) { toDoObj.description = newDescription } ;
    };
};

const due = function(target, newDue) {
    for (let category in hub) {
        const toDoObj = hub[category]._toDo[target];
        if (toDoObj) { toDoObj.due = newDue };
    };
};

const priority = function(target, newPriority) {
    for (let category in hub) {
        const toDoObj = hub[category]._toDo[target];
        if (toDoObj) { toDoObj.priority = newPriority };
    };
};

const notes = function(target, newNotes) {
    for (let category in hub) {
        const toDoObj = hub[category]._toDo[target];
        if (toDoObj) { toDoObj.notes = newNotes };
    };
};

const isComplete = function (target, newStatus) {
    for (let category in hub) {
        const toDoObj = hub[category]._toDo[target];
        if (toDoObj) { toDoObj.isComplete = newStatus };
    };
};

//Functions to add: priority, notes, isComplete, 

export { 
    add, 
    rename,
    assign, 
    del, 
    description,
    due,
    priority,
    notes,
    isComplete 
};

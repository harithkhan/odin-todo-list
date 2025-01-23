import { toDoHub as hub } from "./todo-hub.js";
import ToDo from "./todo-class.js";
import { Category } from "./category-class.js";

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

const del = (category, toDoKey) => delete hub[category]._toDo[toDoKey];



export { add, rename, del };

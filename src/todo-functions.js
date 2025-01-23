import { toDoHub } from "./todo-hub.js";
import ToDo from "./todo-class.js";
import { Category } from "./category-class.js";

//Exported functions that manipulate object toDoHub related to class ToDo
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
        toDoHub.General.toDo = new ToDo(
            title, 
            description, 
            due, 
            priority, 
            notes, 
            isComplete
        );
    } else if (toDoHub.hasOwnProperty(category)) {
        toDoHub.category.toDo = new ToDo(
            title, 
            description, 
            due, 
            priority, 
            notes, 
            isComplete
        );
    } else if (!toDoHub.hasOwnProperty(category)) {
        toDoHub.category = new Category(category); //Create a new category if the provided one doesn't exist
        toDoHub.category.toDo = new ToDo(
            title, 
            description, 
            due, 
            priority, 
            notes, 
            isComplete
        );
    };
};

export { add };

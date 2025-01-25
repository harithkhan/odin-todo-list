import { Category } from "./category-class";
import { toDoHub as hub } from "./todo-hub";

//Exported functions that manipulate object toDoHub, but only related to class Category
const add = function(title, description, due) {
    hub[title] = new Category(title, description, due);
};

const del = (title) => delete hub[title];    

const rename = function(oldTitle, newTitle) {
    hub[oldTitle].title = newTitle; //Change the title in the current obj to new name
    const oldObj = hub[oldTitle]; 
    hub[newTitle] = oldObj; //Create a new obj
    delete hub[oldTitle]; //Delete old obj
};

const description = (key, newDescription) => hub[key].description = newDescription;

const due = (key, newDue) => hub[key].due = newDue;

export {
    add,
    del,
    rename,
    description,
    due 
};
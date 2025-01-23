import { Category } from "./category-class";
import { toDoHub as hub } from "./todo-hub";

//Exported functions that manipulate object toDoHub, but only related to class Category
const add = function(title, description) {
    hub[title] = new Category(title, description);
};

const del = (title) => delete toDoHub[title];    

const rename = function(oldTitle, newTitle) {
    toDoHub[oldTitle].title = newTitle; //Change the title in the current obj to new name
    const oldObj = toDoHub[oldTitle]; 
    toDoHub[newTitle] = oldObj; //Create a new obj
    delete hub[oldTitle]; //Delete old obj
};

const description = (key, newDescription) => toDoHub[key].description = newDescription;

const due = (key, newDue) => toDoHub[key].due = newDue;

export {
    add,
    del,
    rename,
    description,
    due 
};
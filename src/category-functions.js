import { Category } from "./category-class";
import { toDoHub } from "./todo-hub";

//Exported functions that manipulate object toDoHub related to class Category
const addCategory = function(title, description) {
    toDoHub[title] = new Category(title, description);
};

const deleteCategory = (title) => delete toDoHub[title];    

const setTitle = function(oldTitle, newTitle) {
    toDoHub[oldTitle].title = newTitle;
    const oldObj = toDoHub[oldTitle];
    toDoHub[newTitle] = oldObj; //Create a new obj
    delete toDoHub[oldTitle]; //Delete old obj
};

const setDescription = (key, newDescription) => toDoHub[key].description = newDescription;

const setDue = (key, newDue) => toDoHub[key].due = newDue;

export { addCategory, deleteCategory, setTitle, setDescription, setDue };
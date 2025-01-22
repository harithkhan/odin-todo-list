import { Category } from "./category-class";

//Initialize object that stores all instances of classes Category and ToDo (do not export, keep private)
let toDoHub = {};
toDoHub["General"] = new Category("General", "General/default category.");

const getData = () => toDoHub; // Export to get Data

//Exported functions that manipulate Class Category
const addCategory = function(title, description) {
    toDoHub[title] = new Category(title, description);
};

const deleteCategory = (title) => delete toDoHub[title];    

const renameTitle = function(oldTitle, newTitle) {
    toDoHub[oldTitle].title = newTitle;
    const oldObj = toDoHub[oldTitle];
    toDoHub[newTitle] = oldObj; //Create a new obj
    delete toDoHub[oldTitle]; //Delete old obj
};

const setDescription = (key, newDescription) => toDoHub[key].description = newDescription;

const setDue = (key, newDue) => toDoHub[key].due = newDue;

export { getData, addCategory, deleteCategory, renameTitle, setDescription, setDue };
import { Category } from "./category-class";
import { toDoHub as hub } from "./todo-hub";

//Exported functions that manipulate object toDoHub, but only related to class Category
const add = function(title, description, due) {
    hub[title] = new Category(title, description, due);
};

const del = (title) => delete hub[title];    

const rename = function(oldTitle, newTitle) {
    if (oldTitle === newTitle) return; // Skip if title didn't change
  
    if (hub[oldTitle]) {
      hub[oldTitle].title = newTitle; // Update title property
      const oldObj = hub[oldTitle];
      hub[newTitle] = oldObj; // Create new key with updated title
      delete hub[oldTitle]; // Remove old key
    };
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
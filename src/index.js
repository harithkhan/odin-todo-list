import { assignToDo } from "./todo-assign.js";
import { Category, categoryObj } from "./category.js";
import ToDo from "./todo-class.js";

let cleanHouse = new ToDo("Clean House", "Mop floors.");
let chores = new Category("Chores", "Non-work related tasks.");
categoryObj.chores = chores;
assignToDo(cleanHouse, chores);
console.log(categoryObj);
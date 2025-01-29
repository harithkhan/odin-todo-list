import { add } from "./category-functions";
import { add as addToDo } from "./todo-functions";

//Initialize object that stores all instances of classes Category and ToDo 
export let toDoHub = {}; //Only export to category-functions and todo-functions, otherwise keep private

export const getData = () => toDoHub;

//Initialize General Category and Trash Object
add("General", "General/Default category.");//Initialize General category
addToDo(undefined, "Toggle the checkbox on the left");
toDoHub["Trash"] = {};
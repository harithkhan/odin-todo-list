import { add } from "./category-functions";
import { add as addToDo } from "./todo-functions";

//Initialize object that stores all instances of classes Category and ToDo 
export let toDoHub = {}; //Only export to category-functions and todo-functions, otherwise keep private

export const getData = () => toDoHub;

//Initialize General Category and Trash Object
add("General", "General/Default category.");//Initialize General category
addToDo(undefined, "Toggle the checkbox on the left");
addToDo(undefined, "I am just trying to write a long sentence to see if it breaks the DOM or not.")
toDoHub["Trash"] = {};
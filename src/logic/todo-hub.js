import { add } from "./category-functions";

//Initialize object that stores all instances of classes Category and ToDo 
export let toDoHub = {}; //Only export to category-functions and todo-functions, otherwise keep private
add("General", "General/Default category.");//Initialize General category
add("Trash", "Container of deleted categories and to do's.");

export const getData = () => toDoHub;
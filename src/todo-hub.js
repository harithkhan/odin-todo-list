import * as catFunction from "./category-functions";

//Initialize object that stores all instances of classes Category and ToDo 
export let toDoHub = {}; //Only export to category-functions and todo-functions, otherwise keep private
catFunction.add("General", "General/Default category.");    

export const getData = () => toDoHub;
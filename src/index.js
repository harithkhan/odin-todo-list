import { getData } from "./todo-hub";
import * as catFunction from "./category-functions";
import * as toDoFunction from "./todo-functions";

catFunction.addCategory("Chores", "Things to do around the house");
catFunction.setDescription("Chores", "This is the new description.");
catFunction.setDue("Chores", "3:55pm Thursday, 23 Jan 2025");

toDoFunction.add(
    undefined, 
    "Finish ToDo Project", 
    "Just finish coding", 
    undefined,
    undefined,
    undefined,
    undefined
);

console.log(getData());

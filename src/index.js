import { getData } from "./todo-hub";
import * as catFunction from "./category-functions";
import * as toDoFunction from "./todo-functions";
import ToDo from "./todo-class";

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

toDoFunction.add(
    "Chores",
    "Laundry",
    "Harith and Taylor's clothes",
    undefined,
    undefined,
    undefined,
    undefined
)

toDoFunction.add(
    "Exercise",
    "Pickleball",
    "Book Pickleball court",
    undefined,
    undefined,
    undefined,
    undefined
)

toDoFunction.add(
    "Exercise",
    "Gym",
    "Lift some weights.",
    undefined,
    undefined,
    undefined,
    undefined
)

toDoFunction.rename("Exercise", "Gym", "Powerlift");

console.log(getData());
console.log(getData().Exercise._toDo.Powerlift instanceof ToDo);

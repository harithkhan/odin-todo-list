import { getData } from "./todo-hub";
import * as catFunction from "./category-functions";
import * as toDoFunction from "./todo-functions";
import * as checklistFunction from "./checklist-functions"

catFunction.add("Chores", "Things to do around the house");
catFunction.due("Chores", "3:55pm Thursday, 23 Jan 2025");

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
);

toDoFunction.add(
    "Exercise",
    "Pickleball",
    "Book Pickleball court",
    undefined,
    undefined,
    undefined,
    undefined
);

toDoFunction.add(
    "Exercise",
    "Gym",
    "Lift some weights.",
    undefined,
    undefined,
    undefined,
    undefined
);

checklistFunction.add("Gym", "Upright rows");
checklistFunction.add("Gym", "Squats");
checklistFunction.add("Gym", "Pull-ups");
checklistFunction.add("Laundry", "Dad's laundry");
checklistFunction.add("Laundry", "Taylor's laundry");

checklistFunction.rename("Gym", "Upright rows", "Deadlifts");
checklistFunction.rename("Laundry", "Dad's laundry", "My laundry")

checklistFunction.del("Gym", "Deadlifts");

console.log(getData().Exercise);
console.log(getData().Chores.toDo);

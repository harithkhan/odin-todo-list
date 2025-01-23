import { getData } from "./logic/todo-hub";
import * as catFunction from "./logic/category-functions";
import * as toDoFunction from "./logic/todo-functions";
import * as checklistFunction from "./logic/checklist-functions"

catFunction.add("Chores", "Things to do around the house");

toDoFunction.add(undefined,"Cut Hair");
toDoFunction.add(undefined, "Buy socks");

toDoFunction.add("Chores", "Paint walls");
toDoFunction.add("Chores", "Laundry");

toDoFunction.add("Exercise", "Powerlift");
toDoFunction.add("Coding", "Library Project");

console.log(getData());
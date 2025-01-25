import "./style.css";
import { getData } from "./logic/todo-hub";
import * as catFunction from "./logic/category-functions";
import * as toDoFunction from "./logic/todo-functions";
import * as checklistFunction from "./logic/checklist-functions"
import * as addTodo from "./display/add-todo"
import { displayHub } from "./display/display-hub";

toDoFunction.add(undefined, "5 deep breaths", "Just relax", "25/02/2025");
console.log(getData());
displayHub();
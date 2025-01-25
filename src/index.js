import "./style.css";
import { getData } from "./logic/todo-hub";
import * as catFunction from "./logic/category-functions";
import * as toDoFunction from "./logic/todo-functions";
import * as checklistFunction from "./logic/checklist-functions"
import * as addTodo from "./display/add-todo"
import { displayHub } from "./display/display-hub";

console.log(getData());
displayHub();
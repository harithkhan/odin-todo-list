import "./style.css";
import { getData } from "./logic/todo-hub";
import * as catFunction from "./logic/category-functions";
import * as toDoFunction from "./logic/todo-functions";
import * as checklistFunction from "./logic/checklist-functions"
import * as addTodo from "./display/add-todo"
import { displayHub } from "./display/display-hub";
import { buildAllCats } from "./display/cat-display";

//Test objects
toDoFunction.add(undefined, "5 deep breaths", "Just relax", "28/02/2025");
toDoFunction.add("Exercise", "Gym", "Do 22 sets", "29/02/2025");
catFunction.add("ToDo List Project", "A web app that is a functional to-do list", "27/01/2025");
toDoFunction.add("ToDo List Project", "Add logic to buttons");

console.log(getData());
displayHub();
buildAllCats();

const showAllButton = document.getElementById("show-all-button");
showAllButton.addEventListener("click", displayHub);


import "./style.css";
import { getData } from "./logic/todo-hub";
import * as catFunction from "./logic/category-functions";
import * as toDoFunction from "./logic/todo-functions";
import * as checklistFunction from "./logic/checklist-functions"
import * as addTodo from "./display/add-todo"
import { initializeDefaultHub } from "./logic/todo-hub";
import { displayHub } from "./display/display-hub";
import { buildAllCats } from "./display/cat-display";
import { attachCatButtonListeners } from "./display/cat-display";
import { updateLocalStorage } from "./logic/local-storage";
import { loadLocalStorage } from "./logic/local-storage";

loadLocalStorage();
displayHub();
buildAllCats();
attachCatButtonListeners();
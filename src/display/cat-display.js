import { getData } from "../logic/todo-hub";
import { displayHub } from "./display-hub";

export function listAllCats() {

};

export function showAllCats() {

}

const showAllButton = document.getElementById("show-all-button");
showAllButton.addEventListener("click", displayHub);
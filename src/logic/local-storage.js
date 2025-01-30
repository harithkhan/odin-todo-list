import { toDoHub } from "./todo-hub";
export function updateLocalStorage() {
    localStorage.setItem("toDoHub", JSON.stringify(toDoHub))
};
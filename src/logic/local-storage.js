import { toDoHub } from "./todo-hub";

export function updateLocalStorage() {
    localStorage.setItem("toDoHub", JSON.stringify(toDoHub))
};
export function loadLocalStorage() {
    const storedHub = localStorage.getItem("toDoHub");  
    if (storedHub !== null) { toDoHub = storedHub; }; 
    if (storedHub === null) {
        console.log("There is no stored data to retrieve.")
    }
};
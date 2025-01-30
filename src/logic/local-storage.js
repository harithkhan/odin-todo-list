import { Category } from "./category-class";
import ToDo from "./todo-class";
import { toDoHub } from "./todo-hub";
import { initializeDefaultHub } from "./todo-hub";

export function updateLocalStorage() {
    localStorage.setItem("toDoHub", JSON.stringify(toDoHub));
};
export function loadLocalStorage() {
    const storedHub = JSON.parse(localStorage.getItem("toDoHub")); 
    if (!storedHub) {
        console.log("No stored data found.");
        initializeDefaultHub(); 
        return;
    };
    // Rebuild class instances from raw data
    initializeDefaultHub();
    for (let category in storedHub) {
        if (category !== "General" || category !== "Trash") {
            const storedCategory = storedHub[category];
            toDoHub[category] = new Category(
                storedCategory.title,
                storedCategory.description,
                storedCategory.due
            );
            for (let toDoItem in storedCategory.toDo) {
                const storedToDo = storedCategory.toDo[toDoItem];
                toDoHub[category].toDo[toDoItem] = new ToDo(
                    storedToDo.title,
                    storedToDo.description,
                    storedToDo.due,
                    storedToDo.priority,
                    storedToDo.notes,
                    storedToDo.isComplete,
                    storedToDo.checklist,
                    storedToDo.whenCreated
                );
            };
        };
    };
    console.log(toDoHub);
};
import { Category } from "./category-class";
import ToDo from "./todo-class";
import { toDoHub } from "./todo-hub";
import { initializeDefaultHub } from "./todo-hub";

export function updateLocalStorage() {
    localStorage.setItem("toDoHub", JSON.stringify(toDoHub));
};
export function loadLocalStorage() {
    try {
        const storedHub = JSON.parse(localStorage.getItem("toDoHub")); 
        if (!storedHub) throw new Error("No stored data");
        Object.keys(toDoHub).forEach(key => delete toDoHub[key]);
        for (let category in storedHub) {
            if (category !== "Trash") {
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
            } else if (category === "Trash") {
                const trashCat = storedHub.Trash
                for (let toDoItem in trashCat) {
                    toDoHub["Trash"][toDoItem] = storedHub.Trash[toDoItem];
                };
            };
        };
    } catch(error) {
        console.error("Loading failed. Initializing fresh hub:", error);
        initializeDefaultHub();
    };
    console.log(toDoHub);
};
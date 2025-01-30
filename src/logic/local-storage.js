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
                    storedCategory._title,
                    storedCategory._description,
                    storedCategory._due
                );
                for (let toDoItem in storedCategory._toDo) {
                    const storedToDo = storedCategory._toDo[toDoItem];
                    toDoHub[category].toDo[toDoItem] = new ToDo(
                        storedToDo._title,
                        storedToDo._description,
                        storedToDo._due,
                        storedToDo._priority,
                        storedToDo._notes,
                        storedToDo._checklist,
                        storedToDo._isComplete,
                        storedToDo._whenCreated
                    );
                };
            } else if (category === "Trash") {
                const trashCat = storedHub.Trash
                toDoHub["Trash"] = {};
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
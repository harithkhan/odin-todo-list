import { toDoHub as hub } from "./todo-hub.js";
import ToDo from "./todo-class.js";
import { Category } from "./category-class.js";
import { getData } from "./todo-hub.js";
import { ca } from "date-fns/locale";

//Exported functions that manipulate object toDoHub, but only related to class ToDo
const add = function(
    category,
    title, 
    description, 
    due, 
    priority, 
    notes, 
    isComplete
) {
    if (!category || category === "General") {
        hub.General.toDo[title] = new ToDo(
            title, 
            description, 
            due, 
            priority, 
            notes, 
            isComplete
        );
    } else if (hub.hasOwnProperty(category)) {
        hub[category].toDo[title] = new ToDo(
            title, 
            description, 
            due, 
            priority, 
            notes, 
            isComplete
        );
    } else if (!hub.hasOwnProperty(category)) {
        hub[category] = new Category(category); //Create a new category if the provided one doesn't exist
        hub[category].toDo[title] = new ToDo(
            title, 
            description, 
            due, 
            priority, 
            notes, 
            isComplete
        );
    };
};

const rename = function(oldTitle, newTitle) {
    for (let category in hub) {
        if (hub[category]?.toDo?.[oldTitle] && oldTitle !== newTitle) { //Find the target obj in its category
            hub[category].toDo[oldTitle].title = newTitle; //Change the title in the current obj to new name
            const oldObj = hub[category].toDo[oldTitle];
            hub[category].toDo[newTitle] = oldObj //Create a new obj with new title name
            delete hub[category].toDo[oldTitle] //Delete old obj
        };
    };
};

const assign = function(target, newCategory) {
    for (let category in hub) {
        const toDoObj = hub[category].toDo[target];
        if (toDoObj) { 
            hub[newCategory].toDo[target] = toDoObj; //Assign toDo into new category
            delete hub[category].toDo[target]; //Delete old toDo object from old category
            break;
        };
    };
}

const del = function(target) {
    for (let category in hub) {
        const toDoObj = hub[category].toDo[target];
        if (toDoObj) { delete hub[category]._toDo[target] };
    };
};

const description = function(target, newDescription) {
    for (let category in hub) {
        const toDoObj = hub[category]?.toDo?.[target];
        if (toDoObj) { toDoObj.description = newDescription } ;
    };
};

const due = function(target, newDue) {
    for (let category in hub) {
        const toDoObj = hub[category]?.toDo?.[target];
        if (toDoObj) { toDoObj.due = newDue };
    };
};

const priority = function(target, newPriority) {
    for (let category in hub) {
        const toDoObj = hub[category]?.toDo?.[target];
        if (toDoObj) { toDoObj.priority = newPriority };
    };
};

const notes = function(target, newNotes) {
    for (let category in hub) {
        const toDoObj = hub[category]?.toDo?.[target];
        if (toDoObj) { toDoObj.notes = newNotes };
    };
};

const isComplete = function(target, newStatus) {
    for (let category in hub) {
        const toDoObj = hub[category]?.toDo?.[target];
        if (toDoObj) { 
            toDoObj.isComplete = newStatus;
            return;
        };
    };
};

const moveToTrash = function(event) {
    const category = event.target.dataset.category;
    const title = event.target.dataset.title;
    const data = getData();
    const toTrash = data[category].toDo[title];

    if (data.Trash[category]) {
        data.Trash[category].toDo[title] = new ToDo(
            toTrash.title, 
            toTrash.description, 
            toTrash.due, 
            toTrash.priority, 
            toTrash.notes, 
            toTrash.checklist, 
            toTrash.isComplete
        );
        data.Trash[category].toDo[title].whenCreated = toTrash.whenCreated;
    } else if (!data.Trash[category]) {
        const catObj = data[category];
        data.Trash[category] = new Category(catObj.title, catObj.description, catObj.due);
        data.Trash[category].toDo[title] = new ToDo(
            toTrash.title, 
            toTrash.description, 
            toTrash.due, 
            toTrash.priority, 
            toTrash.notes, 
            toTrash.checklist, 
            toTrash.isComplete
        );
        data.Trash[category].toDo[title].whenCreated = toTrash.whenCreated;
    };
    delete data[category].toDo[title];
};

const restore = function(title) {
    for (let cat in hub.Trash) {
        const target = hub.Trash[cat].toDo;
        if (title in target && cat in hub) {
            const toRestore = hub.Trash[cat].toDo[title];
            hub[cat].toDo[title] = toRestore;
        };
        if (title in target && !hub.hasOwnProperty(cat)) {
            hub[cat] = hub.Trash[cat];
            const toRestore = hub.Trash[cat].toDo[title];
            hub[cat].toDo[title] = toRestore;
        }
        delete hub.Trash[cat].toDo[title];
    };
    console.log(getData());
  };

export { 
    add, 
    rename,
    assign, 
    del, 
    description,
    due,
    priority,
    notes,
    isComplete,
    moveToTrash,
    restore
};

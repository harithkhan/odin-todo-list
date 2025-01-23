import { toDoHub as hub } from "./todo-hub.js";
import Checklist from "./checklist-class.js";

//Function to help isolate the target object. "target" should be key of _toDo
const getToDo = function(target) { 
    for (let category in hub) { 
        for (let key in hub[category]) { 
            const targetObj = hub[category][key][target]; //Variable to check if target object exists
            if (key === "_toDo" && targetObj) return targetObj;
        };
    };
};

const add = function(target, item, isComplete) {
    let key = Object.keys(getToDo(target)._checklist).length + 1; //Start numerical key at 1   
    getToDo(target)._checklist[key] = new Checklist(item, isComplete); 
}

const rename = function (target, oldItem, newItem) {
    for (let key in getToDo(target)._checklist) {
        console.log(key)
        let toRename = getToDo(target)._checklist[key]._item;
        if (toRename === oldItem) {
            getToDo(target)._checklist[key]._item = newItem;
        };
    };
};

//Add functions: rename, delete, isComplete

export { 
    add,
    rename
};
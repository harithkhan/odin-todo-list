import { toDoHub as hub } from "./todo-hub.js";
import Checklist from "./checklist-class.js";

const add = function(target, item, isComplete) {
    for (let category in hub) { //Iterate through categories
        for (let key in hub[category]) { //Iterate through category keys
            if (key === "_toDo") { 
                const targetObj = hub[category][key][target]; //Lock in target Object
                if (targetObj) {
                    //Use counter to set the key of new checklist property 
                    let counter = Object.keys(targetObj._checklist).length === 0 
                    ? 1 //Start the first key at 1
                    : Object.keys(targetObj._checklist).length + 1;
                    targetObj._checklist[counter] = new Checklist(item, isComplete); 
                };
            };
        };
    };
};

export { 
    add
}
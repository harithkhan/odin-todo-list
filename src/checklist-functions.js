import { toDoHub as hub } from "./todo-hub.js";
import Checklist from "./checklist-class.js";

const add = function(target, item, isComplete) {
    for (let category in hub) { //Iterate through categories
        for (let key in hub[category]) { //Iterate through category key
            const targetObj = hub[category][key][target]; //Lock in target Object
            if (key === "_toDo" && targetObj) { 
                //Use counter to set the key of new checklist property 
                let counter = Object.keys(targetObj._checklist).length + 1;
                //Create new checklist    
                targetObj._checklist[counter] = new Checklist(item, isComplete); 
            
            };
        };
    };
};

//Add functions: rename, delete, isComplete

export { 
    add
}